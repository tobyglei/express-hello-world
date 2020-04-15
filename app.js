const express = require("express");
const app = express();
const port = process.env.PORT || 10000;

app.get("/", (req, res) => res.send("21云盒子 Hello Express / Node.js 样例!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
