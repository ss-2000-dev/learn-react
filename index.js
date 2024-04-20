const express = require("express");
const port = 3001;
const app = express();

app.get("/", (req, res) => res.send("Hello World"));

app.use("/react-tutorial", express.static("public"));

app.listen(port, () => console.log(`Express app listening on port ${port}`));
