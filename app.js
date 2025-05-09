require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

const clientDist = path.join(__dirname, "novus-client", "dist");
app.use(express.static(clientDist));

app.get("*", (_, res) => {
  res.sendFile(path.join(clientDist, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
