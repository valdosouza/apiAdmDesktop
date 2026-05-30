const ProjetoController = require("../controller/projeto.controller.js");

class ProjetoEndPoint {

  static create = (req, res) => {
    
    ProjetoController.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => { res.status(500).send({ error: String(err) }); })
  }

  static update = (req, res) => {

    ProjetoController.update(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => { res.status(500).send({ error: String(err) }); })
  }

  static getList(req, res) {    
    ProjetoController.getList()
      .then(data => {
        res.send(data);
      })
      .catch(err => { res.status(500).send({ error: String(err) }); })
  }

  static get(req, res) {    
    ProjetoController.get(req.params.prj_codigo)
      .then(data => {
        res.send(data);
      })
      .catch(err => { res.status(500).send({ error: String(err) }); })
  }

  static delete(req, res) {

    ProjetoController.delete(req.body).then(data => {
      res.send(data);
    }).catch(err => { res.status(500).send({ error: String(err) }); })
  }
}

module.exports = ProjetoEndPoint;