var express=require('express');
var app=express();

app.get("/",(req,res)=>{

res.send(
"<h1>Fabrikam by aman </h1>"
+"<hr/>"
+"<h3>Smart Devices for sale</h3>"
+"<br/>"
+"<ol>"
+"<li>Laptops</li>"
+"<li>Mobile Phones</li>"
+"<li>Holographic Devices</li>"
+"<li>Smart Watches</li>"
+"<li>Gaming console</li>"
+"</ol>"

);
});

app.get("/aboutus",(req,res)=>{

    res.send(
    "<h1>aman sales </h1>"
    +"<hr/>"
    +"<h3>Practicing docker</h3>"
    +"<br/>"
    +"<ol>"
    +"<li>description: aman sales</li>"
    +"<li>author: aman bhardwaj</li>"
    +"<li>licence :asdf22</li>"
    +"<li>date: 30-07-22</li>"
    +"<li>time: 00:25:02</li>"
    +"</ol>"
    
    );
    });
    

var server=app.listen(9000);
console.log("aman sales running on port 9000");
