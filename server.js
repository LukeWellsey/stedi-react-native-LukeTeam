const express =require('express');

//this also appears to work
//import express from 'express';

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/luke', (req,res) => {res.send("Hello Luke")});
//I could just keep going
app.get('/luke/bacon', (req,res) => {res.send("you found the bacon place")});

app.listen(port, ()=>console.log("Listening"));