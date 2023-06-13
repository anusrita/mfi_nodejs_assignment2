// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an Express app
const app = express();

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set up a route to capture user information
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

// Handle form submission and display captured information
app.post("/display", (req, res) => {
  const { name, dob, gender, address } = req.body;
  res.send(`
    <h1>Information</h1>
    <p>Name: ${name}</p>
    <p>Date of Birth: ${dob}</p>
    <p>Gender: ${gender}</p>
    <p>Address: ${address}</p>
  `);
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
