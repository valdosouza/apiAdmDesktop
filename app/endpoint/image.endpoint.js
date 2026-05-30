const ImageController = require("../controller/image.controller.js");

class ImageEndPoint {

  static create = (req, res) => {    
    ImageController.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => { res.status(500).send({ error: String(err) }); })
  }
}

module.exports = ImageEndPoint;