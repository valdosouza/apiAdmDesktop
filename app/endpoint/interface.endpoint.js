const InterfaceController = require("../controller/interface.controller.js");

class InterfaceEndPoint {

  static create = (req, res) => {
    
    InterfaceController.create(req.body)
      .then(data => {
        res.send(data);
      })
  }

  static update = (req, res) => {

    InterfaceController.update(req.body)
      .then(data => {
        res.send(data);
      })
  }

  static getList(req, res) {    
    InterfaceController.getList(req.params.CIF_CODCLI, req.params.CIF_CODPRJ)
      .then(data => {
        res.send(data);
      })
  }

  static delete(req, res) {

    InterfaceController.delete(req.body).then(data => {
      res.send(data);
    })
  }
}

module.exports = InterfaceEndPoint;