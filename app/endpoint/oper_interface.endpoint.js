const OperInterfaceController = require("../controller/oper_interface.controller.js");

class OperInterfaceEndPoint {

  static create = (req, res) => {
    
    OperInterfaceController.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => { res.status(500).send({ error: String(err) }); })
  }

  static update = (req, res) => {

    OperInterfaceController.update(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => { res.status(500).send({ error: String(err) }); })
  }

  static getList(req, res) {            
    OperInterfaceController.getList()
       .then(data => {
         res.send(data);
       })
       .catch(err => { res.status(500).send({ error: String(err) }); })
  }

  static delete(req, res) {

    OperInterfaceController.delete(req.params.opf_codigo)
    .then(() => {      
      res.status(200).end();
    }).catch(err => { res.status(500).send({ error: String(err) }); })
  }
}

module.exports = OperInterfaceEndPoint;