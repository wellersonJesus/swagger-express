const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const swaggerDocument = require("./swagger.json");

app.use("/api", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(5000, () => console.log(`📑📑📑 Documentation listening :5000`));
