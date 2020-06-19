const express = require('express');
var app= new express();

app.use(express.static('/public/css'))
app.set('view engine','ejs');
app.set('views','./src/views');
app.get('/',function(req,res){
    res.render('Home',{
        nav:[
            {
                link:'/books', name:'Books'
            }
        ]
    })
});
app.listen(5000);