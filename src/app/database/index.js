const Sequelize = require("sequelize");
const Consulta = require("../models/Consulta");
const Usuario = require("../models/Usuario");

const databaseConfig = require("../../config/database");

const models = [Consulta, Usuario];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

module.exports = new Database();
