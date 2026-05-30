const ScriptController = require("../controller/script.controller.js");

class ScriptEndPoint {

  static create = (req, res) => {
    
    ScriptController.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => { res.status(500).send({ error: String(err) }); })
  }

  static update = (req, res) => {

    ScriptController.update(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => { res.status(500).send({ error: String(err) }); })
  }

  static getList(req, res) {    
    ScriptController.getList(req.params.scp_codcli)
      .then(data => {
        res.send(data);
      })
      .catch(err => { res.status(500).send({ error: String(err) }); })
  }

  static delete(req, res) {

    ScriptController.delete(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => { res.status(500).send({ error: String(err) }); });
  }
}

module.exports = ScriptEndPoint;