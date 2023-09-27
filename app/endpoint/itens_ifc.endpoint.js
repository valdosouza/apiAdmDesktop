const ItensIfcController = require("../controller/itens_ifc.controller.js");

class ItensIfcEndPoint {

  static create = (req, res) => {
    
    ItensIfcController.create(req.body)
      .then(data => {
        res.send(data);
      })
  }

  static update = (req, res) => {

    ItensIfcController.update(req.body)
      .then(data => {
        res.send(data);
      })
  }

  static getList(req, res) {    
    ItensIfcController.getList(req.params.cif_codprj)
      .then(data => {
        res.send(data);
      })
  }

  static delete(req, res) {

    ItensIfcController.delete(req.params.ifc_codigo)
    .then(() => {
      res.status(200).end();
    })
  }
}
module.exports = ItensIfcEndPoint;