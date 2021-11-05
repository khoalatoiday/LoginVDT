const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT ? process.env.PORT : 3001;

const publicPath = path.join(__dirname,"..","..", "public");
console.log(publicPath)
app.use(express.static(publicPath)); 

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html")); 
});

app.listen(port, () => {
  console.log("Server express is running in " + port);
});
