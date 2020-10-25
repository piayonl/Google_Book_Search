const express = require("express");
const mongoose = require ("mongoose");
const routes= require ("./routes")
const path = require("path");
const connectDB = require('./config/db');
const routes = require("./routes/api/books.js");



const PORT = process.env.PORT || 3001;
const app = express();


// Connect Database
connectDB();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes)
app.use('/api/books', require('./routes/books'));
app.use('/api/index', require('./routes/index'));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Connet to mongoose
// mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://gbooksearch:gbooksearch@cluster0.wgqje.mongodb.net/gbooksearch?retryWrites=true&w=majority",
  
//    {useNewUrlParser: true});
// "mongodb://localhost/googlebooks",
// "mongodb+srv://gbooksearch:<password>@cluster0.wgqje.mongodb.net/<dbname>?retryWrites=true&w=majority"

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
