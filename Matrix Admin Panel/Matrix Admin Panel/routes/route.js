const express = require("express");
const route = express.Router();
const ctl = require("../controller/ctl");
const passport = require("passport");
const passportSt = require("../middleware/passport");



route.get("/", ctl.Login);
route.post("/loginData",
    passport.authenticate("local", {failureRedirect: "/"}),
    ctl.userLogin);
route.get("/dashBoard",passport.checkAuth, ctl.HomePage);
route.get("/form",passport.checkAuth,ctl.Addadmin);
route.get("/tableData",passport.checkAuth,ctl.viewAdmin);

route.post("/form",ctl.AddAdminData);
route.get("/delete",ctl.DeleteData);
route.get("/edit",ctl.EditData);
route.post("/update",ctl.UpdateData);
route.get("/logout" , ctl.logout);


module.exports = route;