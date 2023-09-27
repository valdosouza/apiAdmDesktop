const Base = require('./base.controller.js');
const db = require("../model/index.js");
const Tb = db.projeto;

class ProjetoController extends Base {

  static async create(body) {
    const promise = new Promise(async (resolve, reject) => {
      try {       
        Tb.create(data)
          .then((data) => {
            resolve(data);
          })
      } catch (error) {
        reject("ProjetoController.create:" + err);
      }

    });
    return promise;
  }

  static async update(body) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        Tb.update(data, {
          where: { id: data.id },
        })
      } catch (error) {
        reject("ProjetoController.update:" + err);
      }
    });
    return promise;
  }

  static async getList() {
    const promise = new Promise(async (resolve, reject) => {
      try {
        var sqltxt =
          'select *  ' +
          'from tb_projeto   ' ;
        Tb.sequelize
          .query(
            sqltxt,
            {
              //replacements: [],
              type: Tb.sequelize.QueryTypes.SELECT,
            }
          )
          .then((data) => {
            resolve(data);
          })
      } catch (error) {
        resolve(error);
      }
    });
    return promise;
  }

  static async get(PRJ_CODIGO) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        var sqltxt =
          'select *  ' +
          'from tb_projeto   '+
          'where PRJ_CODIGO = ? ';
        Tb.sequelize
          .query(
            sqltxt,
            {
              replacements: [PRJ_CODIGO],
              type: Tb.sequelize.QueryTypes.SELECT,
            }
          )
          .then((data) => {
            resolve(data[0]);
          })
      } catch (error) {
        resolve(error);
      }
    });
    return promise;
  }  
}

module.exports = ProjetoController; 
