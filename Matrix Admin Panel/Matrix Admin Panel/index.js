const express = require("express");
const port = 3344;
const db = require("./config/db");
const path = require("path");
const app = express();
const fs = require("fs");
const passport = require("passport");
const session = require("express-session");

app.set("view engine" , "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname,"uploads")));
app.use("/", express.static(path.join(__dirname,"public")));

app.use(
    session({
        name:"local",
        secret:"local",
        resave:true,
        saveUninitialized:false,
        cookie:{maxAge: 100* 100 * 60 , httpOnly:true},
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/" , require("./routes/route"))
app.listen(port , (err)=>{
    err ? console.log(err) : console.log("server strted on port " + port);
})



// const express = require("express");
// const port = 3322;
// const db = require("./config/db");
// const path = require("path");
// const fs = require("fs");
// const app = express();

// app.set("view engine" , "ejs");
// app.use(express.urlencoded({ extended: true }));
// app.use("/", require("./routes/route"));
// app.use("/uploads", express.static(path.join(__dirname,"uploads")));

// app.listen(port, (err)=>{
//     err ? console.log(err) : console.log("server" + port);
// });