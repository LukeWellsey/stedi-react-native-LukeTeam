const express =require('express');

//this also appears to work
//import express from 'express';

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/luke', (req,res) => {res.send("Hello Luke")});
//I could just keep going
app.get('/luke/bacon', (req,res) => {res.send("you found the bacon place")});

//made these changes in github, now I'll pull them into my local git repo
app.get('/sean', (req,res) => {res.send("Hello Sean")}); 

app.get('/bobbert', (req,res) => {res.send("Bob is short for Bobbert")}); 

//sending these back from git
app.get('/Jane', (req,res) => {res.send("Hello Jane")}); 

app.get('/Thurston', (req,res) => {res.send("Hello Thurston")}); 

app.listen(port, ()=>console.log("Listening"));
