// include library
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require("cors");

const port = process.env.PORT;

const database = require('./database');

// API Routes impport
const userRoute = require('./routes/User');

// middleware setup
// Cross Origin Resource Sharing Setup
app.use(cors());
app.use("/api/user", userRoute);

// Desc: default route
// Method: GET
// Access: Public
// URL: /
app.get(
  "/",
  (req, res) => {
    return res.status(200).json({
      status: true,
      code: 200,
      message: "Default API Route."
    });
  }
);


// Start web server
app.listen(port, () => {
  console.log("Server running at port : " + port);
});

