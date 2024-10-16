const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");

const Register = require("./models/registers");

const weatherData = require("../utils/weatherData");



const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");


app.use(express.static(publicPath));
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.json());
app.use(express.urlencoded({extended:false}));


const port = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/home", (req, res)=>{
    res.render("index");
})

app.get("/register", (req, res)=>{
    res.render("register");
})

app.get("/login", (req, res)=>{
    res.render("login");
})

app.get("/weather", (req,res) => {
    if(!req.query.address){
        return res.send("Address is required")
    }
    weatherData(req.query.address, (error, result) => {
        if(error){
            return res.send(error);
        }
        res.send(result);
    });
});




app.get("*", (req, res) => {
    res.render("404", {title: "Page not found"});
})


app.post("/register", async (req, res)=>{
    try {
        
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(password === cpassword){

            const registerUser = new Register({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword,
                
            })

            const registered = await registerUser.save();
            res.status(201).render("index");

        }else{
            res.send("Password didn't match");
        }

    } catch (error) {
        res.status(400).send(error);                
    }
})


app.post("/login", async(req, res)=>{
    try {
        const email =req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email:email});
        
        if(useremail.password === password){
             res.status(201).render("index");
        }
        else{
            res.send("Invalid login details");
        }


    } catch (error) {
        res.status(400).send("Invalid login details");
    }
})



app.listen(port, ()=>{
    console.log("Server is listening on port " + port);
});

