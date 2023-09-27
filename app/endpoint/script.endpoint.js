const ScriptController = require("../controller/script.controller.js");

class ScriptEndPoint {

  static create = (req, res) => {
    
    ScriptController.create(req.body)
      .then(data => {
        res.send(data);
      })
  }

  static update = (req, res) => {

    ScriptController.update(req.body)
      .then(data => {
        res.send(data);
      })
  }

  static getList(req, res) {    
    ScriptController.getList(req.params.SCP_CODCLI)
      .then(data => {
        res.send(data);
      })
  }

  static delete(req, res) {

    ScriptController.delete(req.body).then(data => {
      res.send(data);
    })
  }
}

module.exports = ScriptEndPoint;