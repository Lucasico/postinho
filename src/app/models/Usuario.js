const Sequelize = require("sequelize");

class Usuario extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        login: Sequelize.STRING,
        password: Sequelize.STRING,
        tipo: Sequelize.INTEGER,
        endereco_id: Sequelize.INTEGER,
        nome: Sequelize.STRING,
        nascimento: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = Usuario;
