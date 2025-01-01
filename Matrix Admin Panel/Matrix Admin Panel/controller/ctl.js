const express = require("express");
const admin = require("../model/schema");
const fs = require("fs");


module.exports.Login = (req,res) => {
    res.render("Login");
};
module.exports.userLogin = async (req, res) =>{
    console.log(req.body);  
    let admindata = await admin.findOne({email: req.body.email});
    console.log(admindata);
        res.redirect("/dashboard");
};

module.exports.HomePage = async(req,res) =>{
    res.render("admin");
};

module.exports.Addadmin =async(req,res) => {
    res.render("formbasic");   
};

module.exports.logout = (req,res)=>{
    res.clearCookie("local");
    res.redirect("/");
};


module.exports.viewAdmin = async (req, res) => {     
    let data = await admin.find({});
    res.render("table", { data });
};

module.exports.AddAdminData = async(req,res)=>{
    console.log(req.body); 
    let data = await admin.create(req.body)
    data && res.redirect("/tableData")
}
module.exports.DeleteData = async(req,res)=>{
    let data = await admin.findByIdAndDelete(req.query.id)
    data && res.redirect("/tableData");
}
module.exports.EditData = async(req,res)=>{
    let data = await admin.findById(req.query.id)
    data && res.render("edit",{data})
}
module.exports.UpdateData = async(req,res)=>{
    let data = await admin.findByIdAndUpdate(req.body.id,req.body)
    data && res.redirect("/tableData");
}