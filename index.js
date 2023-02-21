const express = require("express")
const app = express()

const passport = require("passport")
require("./passportConfig")(passport)
require("dotenv").config()
const db = require("./db")
db.connect()
const port = 3000 || process.env.port
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/auth/google", passport.authenticate("google",{scope: ["email", "profile"]}))
app.get("/auth/google/callback", passport.authenticate("google",{session: false}),
(req,res)=>{
    res.redirect("/profile")
})
app.get("/profile", (req,res)=>{
    console.log(req);
    res.send("welcome")
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})