// const https = require('https');
const express = require("express");
const fs = require("fs");
const path = require("path");

// const hostName = "stage.senergy.net"
const httpsPort = 3003;
const app = express();

app.use(express.static(path.join(__dirname, "build")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.listen(httpsPort);
