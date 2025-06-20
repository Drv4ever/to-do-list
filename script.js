// // http - > ek potocol hai  jisko follow karke aap internet pe naa hi kutch bej sakte ho naa hi kutch maang sakte ho 
// // const http = require('http');

// // const server = http.createServer(function(req ,res){
// //     res.end("hello world");
// // })

// // server.listen(3000);

// // npm understanding 
// // node js joo install aata hai usse module kehet hai  
// // script 
// //mern stack 
// // express js -> 
// // its a npm package 
// // framwork -> gives flow : 
// // manages everything form reseiving the request and givinf back responce : request mught ye item dena zara 

// ................................................................................................................................
// form handling and working with the forms 
// handle backend process of forms and makiong sure thr data coming from any frontend lib, fw , templating engins , we still handle  it at the backend process
// session cookie -> 
// tumne jo bheja tha vo tha index but server ko jo mila ov hai blog (ek xcribble index) aab usko wapas se convert karna pdega index me take server usse read kar paye 

// DYNAMIC ROUTING 
// 1. DYNAMIC ROUTING 
// 2. HOW TO TAKE DATA COMMNG FROM FRONTEND TO BACKEND 
// the project steps will go like 
// 1. settign up parsers for form 
// 2. settign up ejs for ejs page {frontend type }
// install ejs from ejs-> set up ejs ass a missle ware foe view engine ->
// 3. setting up public static files 
// 4. dynammic routing


const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public/stylesheets')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

app.get("/",function(req,res){
    fs.readdir(`./files` , function(err,files){ 
         res.render("index", {files: files});
    })
});

app.post('/create-task', function(req,res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
    res.redirect("/");
    } )
})

app.get('/files/:filename',function(req,res){
  fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err, filedata){
   res.render('show', {filename: req.params.filename, filedata: filedata});
  })
});
// app.get("/profile/:username", function(req,res){
  
//     res.send(req.params.username);
// })

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});


