/** Framework Express */
const express = require("express");
/** Framework Consign */
const consign = require("consign");
/** Framework BodyParser -> Recebe itens no body de uma requisição */
const bodyParser = require("body-parser");
/** Framework Express Validator, valida nosso body */
const expressValidator = require("express-validator");

/** Inicia o express */
const app = express();

/* Setar Engines -> views && View engine */
app.set("view engine", "ejs");
app.set("views", "./app/views");

/* Configurando Midwares */
app.use(express.static("./app/public")); // Arquivos estáticos
app.use(bodyParser.urlencoded({ extended: true })); // Body Parser
app.use(expressValidator()); // Validação de dados

consign()
    .include("app/routes")
    .then("app/models")
    .then("app/controllers")
    .into(app);

/** Exportação do App */
module.exports = app;
