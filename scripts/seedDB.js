const mongoose = require("mongoose");
const db = require("../models");
const connectDB = require('../config/db');

// This file empties the Books collection and inserts the books below

connectDB()
// mongoose.connect(
//     process.env.MONGODB_URI ||
    // "mongodb+srv://gbooksearch:gbooksearch@cluster0.wgqje.mongodb.net/gbooksearch?retryWrites=true&w=majority"
    // {
      //   useNewUrlParser: true
      // });
    // );

const bookSeed = {
    authors: ["CDC"],
    description: "The definitive reference for travel medicine, updated for 2020! A beloved travel must-have for the intrepid wanderer.",
    image: "https://books.google.com/books/content/images/frontcover/gAuXDwAAQBAJ?fife=w200-h300",
    link: "https://play.google.com/store/books/details?id=gAuXDwAAQBAJ&source=gbs_api",
    title: "CDC Yellow Book 2020: Health Information for International Travel",
}

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });