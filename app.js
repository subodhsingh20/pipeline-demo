const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Jenkins CI/CD Pipeline is Working!, great job subodh");
});

app.listen(3000);
