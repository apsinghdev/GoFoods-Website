const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
const cors = require("cors");
// Call the mongoDB function to establish the database connection
mongoDB();
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Use express.json() middleware to parse JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello 78kjo");
});

// Import and use your CreateUser route
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
