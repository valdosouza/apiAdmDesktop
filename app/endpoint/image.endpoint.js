const ImageController = require("../controller/image.controller.js");

class ImageEndPoint {

  static create = (req, res) => {    
    ImageController.create(req.body)
      .then(data => {
        res.send(data);
      })
  }
}

module.exports = ImageEndPoint;