const express = require('express');
const app = express();

app.get('/home', (req,res) => {
    const navData = [
        {name:'About', descrip: 'Hello! My name is Liam. I work in IT and have always been interesting in writing code. I have been learning more about React lately, so this is an updated version of my personal site, created with React and Express. I have added a little personal content to the site, so please enjoy!'},
        {name:'Projects', descrip: 'Projects yo'},
        {name:'Music', descrip: ''},
        {name:'Contact', descrip: ''}
    ];
    res.send(navData)
    res.end();
});

app.put('/home', (req,res) => {
    
})

app.listen(8000, () => console.log('Listening on 8000'));