const Base = require('./base.controller.js');
const db = require("../model/index.js");
const Tb = db.interface;

class InterfaceController extends Base {

  static async create(body) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        var data = {
          ifc_codigo: body.ifc_codigo,
          ifc_codprj:  body.ifc_codprj,
          ifc_descricao: body.ifc_descricao,
          ifc_fr_name: body.ifc_fr_name,
          ifc_codmnu: body.ifc_codmnu,
          ifc_sistema: body.ifc_sistema
        }
        
        Tb.create(data)
          .then((data) => {
            resolve(data);
          })
      } catch (error) {
        reject("InterfaceController.create:" + err);
      }

    });
    return promise;
  }

  static async update(body) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        Tb.update(body, {
          where: { ifc_codigo: body.ifc_codigo },
        })
        .then((data) => {
          resolve(data);
         });
           
      } catch (error) {
        reject("InterfaceController.update:" + error);
      }
    });
    return promise;
  }

  static async delete(ifc_codigo) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        Tb.destroy({
          where: { ifc_codigo: ifc_codigo },
        })
        .then((data) => {
          resolve(data);
         });
      } catch (error) {
        reject("InterfaceController.delete:" + error);
      }
    });
    return promise;
  }
  static async getList(cif_codcli, cif_codprj) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        var sqltxt =
        'SELECT '+
        ' IFC_CODIGO, '+
        ' IFC_CODPRJ,'+
        ' IFC_DESCRICAO, '+
        ' IFC_FR_NAME, '+
        ' IFC_CODMNU, '+
        ' IFC_MENU, '+ 
        ' CIF_ATIVO IFC_SISTEMA '+
        'FROM tb_interface '+
        '  INNER JOIN tb_cli_interface '+
        '  ON (tb_cli_interface.CIF_CODIFC = tb_interface.IFC_CODIGO) '+
        'WHERE (CIF_CODCLI = ?)'+
        '  AND (CIF_CODPRJ = ? )';

        Tb.sequelize
          .query(
            sqltxt,
            {
              replacements: [cif_codcli, cif_codprj],
              type: Tb.sequelize.QueryTypes.SELECT,
            }
          )
          .then((data) => {
            resolve(data);
          })
      } catch (error) {
        reject(error);
      }
    });
    return promise;
  }

}

module.exports = InterfaceController; 
