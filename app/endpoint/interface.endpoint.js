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
    console.log(req.params);
    InterfaceController.getList(req.params.cif_codcli, req.params.cif_codprj)
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