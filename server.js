const express = require('express');
const app = express();

app.get('/home', (req,res) => {
    const navData = [
        {name:'About', descrip: 'My name is Liam Purcell. I am 34 years old and I am the luckiest husband and father of 3! My greatest joy in life comes from family, music, technology, and language. I am currently working as a QA Engineer for a software company in Portland, OR and the main product that my team works on is built with a React.js front end. I have really been enjoying working with React and created this React application in order to host some of my personal music projects and more. Hope you like what you see and hear!'},
        {name:'Music', descrip: '' },
        {name:'Contact', Phone: '503-957-0812', Email: 'purcelllj@gmail.com'}
    ];
    res.send(navData)
    res.end();
});

app.listen(8000, () => console.log('Listening on 8000'));