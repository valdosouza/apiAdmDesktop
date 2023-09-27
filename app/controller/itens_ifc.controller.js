const Base = require('./base.controller.js');
const db = require("../model/index.js");
const Tb = db.itensIFC;

class ItensIfcController extends Base {

  static async create(body) {
    const promise = new Promise(async (resolve, reject) => {
      try {       
        Tb.create(data)
          .then((data) => {
            resolve(data);
          })
      } catch (error) {
        reject("ItensIfcController.create:" + err);
      }

    });
    return promise;
  }

  static async update(body) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        Tb.update(data, {
          where: { ifc_codigo: data.ifc_codigo },
        })
      } catch (error) {
        reject("ItensIfcController.update:" + err);
      }
    });
    return promise;
  }

  static async getList(cif_codprj) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        var sqltxt =
        'SELECT DISTINCT '+
               ' IIF_CODIGO, '+
               ' IIF_CODIFC, '+
               ' IIF_CODOPF '+
               'FROM tb_itens_ifc '+
               '  INNER JOIN tb_interface '+
               '  ON (IIF_CODIFC = IFC_CODIGO) '+
               'WHERE IFC_CODPRJ = ? ';
        Tb.sequelize
          .query(
            sqltxt,
            {        
              replacements: [cif_codprj],
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

}

module.exports = ItensIfcController; 
