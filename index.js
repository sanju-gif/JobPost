const express = require("express");
const router = require("./src/routes/index");
const app = express();

app.use(express.json());

app.use("/api", router);
const port = process.env.PORT || "3000";

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });