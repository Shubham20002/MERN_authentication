//here we have installed mongoose odm to connect with mongodb,
//mongoose also help to create schema and manipulate data from database(crud)
//if we require this file in index then this all code will executed and connection will establish.
const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://shubham992284:shubham123@cluster0.ditsqkh.mongodb.net/?retryWrites=true&w=majority');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

  
 
