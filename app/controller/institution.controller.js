const Base = require('../controller/base.controller.js');
const db = require("../model");
const Op = db.Sequelize.Op;
const TbInstitution = db.institution;

class InstitutionController extends Base {

  static async create(body) {
    const promise = new Promise(async (resolve, reject) => {
      
      Tb.create(data)
        .then((data) => {
          resolve(data);
        })
        .catch(err => {
          reject("order.insert:" + err);
        });
    });
    return promise;
  }

}

module.exports = InstitutionController; 
