const express = require('express');
const app = express();

app.get('/home', (req,res) => {
    const navData = [
        {name:'About'},
        {name:'Projects'},
        {name:'Music'}
    ];
    res.send(navData);
    res.end();
});

app.put('/home', (req,res) => {
    
})

app.listen(8000, () => console.log('Listening on 8000'));