require('dotenv').config(); // reads values from .env file and merges them into process.env

const server = require("./api/server.js");

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
