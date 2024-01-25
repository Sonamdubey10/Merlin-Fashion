const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.static("Backend"));

//Routes
app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/product", (req, res) =>{
    res.sendFile(__dirname + "/products.html");
});
app.get("/categories", (req, res) =>{
    res.sendFile(__dirname + "/categories.html");
});
app.get("/contact", (req, res) =>{
    res.sendFile(__dirname + "/contact.html");
});
app.get("/login", (req, res) =>{
    res.sendFile(__dirname + "/login.html");
});

app.get("/merlin", (req, res) =>{
    res.sendFile(__dirname + "/merlin.html");
});

app.listen(3000, () => {
    console.log("server is running at port 3000");
})  
