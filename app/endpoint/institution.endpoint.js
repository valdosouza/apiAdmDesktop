const InstitutionController = require("../controller/institution.controller.js");

class InstitutionEndPoint {

  static create = (req, res) => {
    const institution = req.body;
    InstitutionController.insert(institution)
      .then(data => {
        institution.id = data.id;
        res.send(institution);
    })
        .catch(err => {
          res.status(500).send({ error: String(err) });
        })
  }

  // Find a single user with an id
  static getInstitution = (req, res) => {
    const id = req.params.id;
    InstitutionController.getInstitution(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({ error: String(err) });
        })
  };

  static getList(req, res) {

    InstitutionController.getList(req.body).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({ error: String(err) });
    })
  }
  static update = (req, res) => {    
    const institution = req.body;
    InstitutionController.update(institution)
      .then((data) => {            
        res.send(data);                           
      })
      .catch(err => {
        res.status(500).send({ error: String(err) });
      })
  }

  static delete(req, res) {

    InstitutionController.delete(req.body).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({ error: String(err) });
    })
  }   
}

module.exports = InstitutionEndPoint;