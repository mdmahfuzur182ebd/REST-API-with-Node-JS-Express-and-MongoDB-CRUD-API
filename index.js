const express = require("express");

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
});