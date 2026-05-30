const ScriptExecController = require("../controller/script_exec.controller.js");

class ScriptExecEndPoint {

  static create = (req, res) => {    
    ScriptExecController.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => { res.status(500).send({ error: String(err) }); })
  }
}

module.exports = ScriptExecEndPoint;