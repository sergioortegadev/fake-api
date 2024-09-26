const express = require("express");
const app = express();
app.use(express.static("images"));
app.listen(4000, () => console.log("  ▒▓ Fake API image server listening on port 4000 ▓▒"));
