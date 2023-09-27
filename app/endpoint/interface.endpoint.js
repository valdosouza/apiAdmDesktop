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
    
    InterfaceController.getList(req.params.cif_codcli, req.params.cif_codprj)
      .then(data => {
        res.send(data);
      })
  }

  static delete(req, res) {

    InterfaceController.delete(req.params.ifc_codigo)
    .then(() => {
      res.status(200).end();
    })
  }
}

module.exports = InterfaceEndPoint;