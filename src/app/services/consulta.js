const Consulta = require("../models/Consulta");

module.exports = {
  async create(data) {
    Consulta.create(data);
  },

  async delete(id) {
    const deleted = await Consulta.destroy({
      where: { id: id },
    });

    return deleted;
  },

  async findOne(id) {
    const consulta = await Consulta.findOne({
      where: { id: id },
    });

    return consulta;
  },

  async findOneByEmail(email) {
    const consulta = await Consulta.findOne({
      where: { email: email },
    });

    return consulta;
  },

  async update(id, data) {
    const response = await Consulta.update(data, {
      where: { id: id },
    });

    return response;
  },

  async list() {
    const consultas = await Consulta.findAll();

    return consultas;
  },
};
