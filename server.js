const express = require("express");
const app = express();
const port = 80;
const version = "1.0";
const os = require("os");

app.get("/", (req, res) =>
  res.send(`Hello World from ${os.hostname} - version ${version}!\n`)
);

app.listen(port, () =>
  console.log(`App running version ${version} at port ${port}`)
);
