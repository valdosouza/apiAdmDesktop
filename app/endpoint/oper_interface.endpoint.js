const OperInterfaceController = require("../controller/oper_interface.controller.js");

class OperInterfaceEndPoint {

  static create = (req, res) => {
    
    OperInterfaceController.create(req.body)
      .then(data => {
        res.send(data);
      })
  }

  static update = (req, res) => {

    OperInterfaceController.update(req.body)
      .then(data => {
        res.send(data);
      })
  }

  static getList(req, res) {            
    OperInterfaceController.getList()
       .then(data => {
         res.send(data);
       })
  }

  static delete(req, res) {

    OperInterfaceController.delete(req.params.opf_codigo)
    .then(() => {      
      res.status(200).end();
    })
  }
}

module.exports = OperInterfaceEndPoint;