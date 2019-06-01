const express = require('express');
const request = require('request');
const fs = require('fs');
const app = express();

app.get('/home', (req, res) => {
  const navData = [
    {
      name: 'home',
      descrip:
        'My name is Liam Purcell. I am 34 years old and I am the luckiest husband and father of 3! My greatest joy in life comes from family, music, technology, and language. I am currently working as a QA Engineer for a software company in Portland, OR and the main product that my team works on is built with a React.js front end. I have really been enjoying working with React and created this React application in order to host some of my personal music projects and more. Hope you like what you see and hear!'
    },
    { name: 'music', descrip: '' },
    { name: 'contact', Phone: '503-957-0812', Email: 'purcelllj@gmail.com' }
  ];
  res.send(navData);
  res.end();
});

app.get('/music', (req, res) => {
  // const options = {
  //     'method': 'GET',
  //     'uri': 'https://drive.google.com/file/d/0BwG8foew0zv2WEE3Q2xyU1B3QTQ/view?usp=sharing',
  //     'headers': {
  //         'Content-Type': 'audio/mp3'
  //     }
  // }

  // request(options, (error, response, body) => {
  //     if(error){
  //         console.log('Error: ', error);
  //     } else {
  //         console.log('StatusCode: ', response.statusCode);
  //     }
  //     res.end(body);
  // });
  res.send('Music Projects');
  res.end();
});

app.listen(8000, () => console.log('Listening on 8000'));
