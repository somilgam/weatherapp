var express=require('express');
var app=express();
var path=require('path');
var hbs=require('hbs');
hbs.registerPartials(path.join(__dirname,'../views/partials'))
var viewpath=path.join(__dirname,'../views')
app.set('view engine','hbs');
app.set('views',viewpath)
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/weather',(req,res)=>{
    res.render('weather')
})
app.get('*',(req,res)=>{
    res.status(404).render('error')
})
app.listen(7000);