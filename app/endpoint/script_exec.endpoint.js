const ScriptExecController = require("../controller/script_exec.controller.js");

class ScriptExecEndPoint {

  static create = (req, res) => {    
    ScriptExecController.create(req.body)
      .then(data => {
        res.send(data);
      })
  }
}

module.exports = ScriptExecEndPoint;