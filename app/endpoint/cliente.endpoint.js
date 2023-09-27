const ClienteController = require("../controller/cliente.controller.js");

class ClienteEndPoint {

  static create = (req, res) => {
    
    ClienteController.create(req.body)
      .then(data => {
        res.send(data);
      })
  }

  static update = (req, res) => {

    ClienteController.update(req.body)
      .then(data => {
        res.send(data);
      })
  }

  static getList(req, res) {    
    ClienteController.getList()
      .then(data => {
        res.send(data);
      })
  }

  static get(req, res) {    
    ClienteController.get(req.params.CLI_CODETD)
      .then(data => {
        res.send(data);
      })
  }

  static getProject(req, res) {    
    ClienteController.getProject(req.params.ETD_CNPJ)
      .then(data => {
        res.send(data);
      })
  }

  static delete(req, res) {

    ClienteController.delete(req.body).then(data => {
      res.send(data);
    })
  }
}

module.exports = ClienteEndPoint;