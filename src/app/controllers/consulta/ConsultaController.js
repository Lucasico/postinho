const services = require("../../services/consulta");
const responseErrorMessage = require("../../utils/responseErrorMessage");
const errorMessage = require("../../utils/responseErrorMessage");

function responseError(res) {
  return res.status(500).json({ res: errorMessage.res });
}

class ConsultaController {
  async store(req, res, next) {
    try {
      await services.create(req.body);
      return res.status(201).json({ res: "Consulta criado com sucesso" });
    } catch (error) {
      responseError(res);
    }
  }

  async index(req, res, next) {
    try {
      const users = await services.list();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ res: responseErrorMessage.res });
    }
  }

  async delete(req, res, next) {
    try {
      const idConsulta = req.params.id;

      const deleted = await services.delete(idConsulta);
      if (deleted) {
        return res.status(200).json({ res: "Consulta excluido com sucesso" });
      }
    } catch (error) {
      responseError(res);
    }
  }

  async update(req, res, next) {
    try {
      const idConsulta = req.params.id;

      const isUpdate = await services.update(idConsulta, req.body);

      if (isUpdate[0] === 1) {
        return res.status(200).json({ res: "Consulta atualizado com sucesso" });
      }
    } catch (error) {
      console.log(error);
      responseError(res);
    }
  }

  async findOne(req, res, next) {
    try {
      const idConsulta = req.params.id;
      const user = await services.findOne(idConsulta);
      res.status(200).json({ res: user });
    } catch (error) {
      responseError(res);
    }
  }
}

module.exports = new ConsultaController();
