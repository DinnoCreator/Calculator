const express = require('express');
const bodyParser = require('body-parser');
const req = require('express/lib/request');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

// for the addition page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

  
app.post('/', (req, res) => {
const num1 = Number(req.body.num1);//changes it from text to number
const num2 = Number(req.body.num2);
  const result = num1 + num2;
  
    res.send(`The answer is ${result} <br> <a href="/">Back</a>`);
  });

// for the subtraction page
app.get('/subtract', (req, res) => {
  res.sendFile(__dirname + '/minus.html');
});

app.post('/subtract', (req, res) => {
const romanI = Number(req.body.romanI);
const romanII = Number(req.body.romanII);
  const answer = romanI - romanII;
  res.send(`The answer is ${answer} <br> <a href="/subtract">Back</a>`)
})

  // for the BMI page
  app.get('/bmicalculator', (req, res) => {  
    res.sendFile(__dirname + '/bmiCalculator.html');
  });

app.post('/bmicalculator', (req, res) => {
const weight = parseFloat(req.body.weight);//chanegs it to a decimal number
const height = parseFloat(req.body.height);
    const bmiResult = weight / Math.pow(height, 2); /*used to raise to the power 
    (what you want to raise, the power of it)*/
     
    res.send(`Your BMI is ${bmiResult} <br> <a href="/bmicalculator">Back</a>`);
  });

// links the css to the server
  app.get('/CSS', (req, res) => {  
    res.sendFile(__dirname + '/style.css');
  });

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });