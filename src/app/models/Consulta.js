const Sequelize = require("sequelize");

class Consulta extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        descricao: Sequelize.STRING,
        paciente_id: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = Consulta;
