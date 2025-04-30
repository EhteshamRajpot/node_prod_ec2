const express = require("express");
const app = express()
const PORT = 3000;


app.get("/hello", (req, res) => {
  res.json({ message: "Hello from node.js application" })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
})