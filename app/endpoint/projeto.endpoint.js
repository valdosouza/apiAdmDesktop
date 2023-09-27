const ProjetoController = require("../controller/projeto.controller.js");

class ProjetoEndPoint {

  static create = (req, res) => {
    
    ProjetoController.create(req.body)
      .then(data => {
        res.send(data);
      })
  }

  static update = (req, res) => {

    ProjetoController.update(req.body)
      .then(data => {
        res.send(data);
      })
  }

  static getList(req, res) {    
    ProjetoController.getList()
      .then(data => {
        res.send(data);
      })
  }

  static get(req, res) {    
    ProjetoController.get(req.params.prj_codigo)
      .then(data => {
        res.send(data);
      })
  }

  static delete(req, res) {

    ProjetoController.delete(req.body).then(data => {
      res.send(data);
    })
  }
}

module.exports = ProjetoEndPoint;