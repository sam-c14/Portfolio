const fs = require("fs");
const path = require("path");
const ncp = require("ncp").ncp;

const sourceDir = path.join(__dirname, "assets");
const targetDir = path.join(__dirname, "dist", "assets");

// Copy assets folder
ncp(sourceDir, targetDir, function (err) {
  if (err) {
    return console.error("Error copying assets:", err);
  }
  console.log("Assets copied successfully!");
});

// Copy index.html file
const indexSourceFile = path.join(__dirname, "index.html");
const indexTargetFile = path.join(__dirname, "dist", "index.html");

fs.copyFile(indexSourceFile, indexTargetFile, (err) => {
  if (err) {
    return console.error("Error copying index.html:", err);
  }
  console.log("index.html copied successfully!");
});
