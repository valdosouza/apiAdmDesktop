const CliInterfaceController = require("../controller/cli_interface.controller.js");

class CliInterfaceEndPoint {

  static replace = (req, res) => {
    
    CliInterfaceController.replace(req.body)
      .then(data => {
        res.send(data);
      })
  }
}

module.exports = CliInterfaceEndPoint;