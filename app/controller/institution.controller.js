const Base = require('../controller/base.controller.js');
const db = require("../model");
const Tb = db.institution;

class InstitutionController extends Base {

  static async insert(body) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        Tb.create(body)
          .then((data) => resolve(data))
          .catch((error) => reject("InstitutionController.insert:" + error));
      } catch (error) {
        reject("InstitutionController.insert:" + error);
      }
    });
    return promise;
  }

  static async getInstitution(id) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        Tb.findByPk(id)
          .then((data) => resolve(data))
          .catch((error) => reject("InstitutionController.getInstitution:" + error));
      } catch (error) {
        reject("InstitutionController.getInstitution:" + error);
      }
    });
    return promise;
  }

  static async getList(filter) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        Tb.findAll()
          .then((data) => resolve(data))
          .catch((error) => reject("InstitutionController.getList:" + error));
      } catch (error) {
        reject("InstitutionController.getList:" + error);
      }
    });
    return promise;
  }

  static async update(body) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        Tb.update(body, {
          where: { id: body.id },
        })
          .then((data) => resolve(data))
          .catch((error) => reject("InstitutionController.update:" + error));
      } catch (error) {
        reject("InstitutionController.update:" + error);
      }
    });
    return promise;
  }

  static async delete(body) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        Tb.destroy({ where: { id: body.id } })
          .then((data) => resolve(data))
          .catch((error) => reject("InstitutionController.delete:" + error));
      } catch (error) {
        reject("InstitutionController.delete:" + error);
      }
    });
    return promise;
  }

}

module.exports = InstitutionController;
