const express = require('express');
const app= express();

const path = require('path');

//if you have html & server into same file then use this
const websitepath = path.join(__dirname);

//if you have your server in anotehr file & html into a folder then use this
//const websitepath = path.join(__dirname, 'website');

app.get('',(req,resp)=>{
    resp.sendFile(websitepath+'/index.html');
});

app.get('/about',(req,resp)=>{
    resp.sendFile(websitepath+'/about.html');
});

app.get('/blog',(req,resp)=>{
    resp.sendFile(websitepath+'/blog.html');
});

app.get('/contact',(req,resp)=>{
    resp.sendFile(websitepath+'/contact.html');
});

app.get('*',(req,resp)=>{
    resp.sendFile(websitepath+'/404.html');
});

app.listen(1500);