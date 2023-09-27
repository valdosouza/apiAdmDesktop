const Base = require('./base.controller.js');
const db = require("../model/index.js");
const Tb = db.cliInterface;

class CliInterfaceController extends Base {

  static async replace(body) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        var sqltxt =
        'REPLACE INTO '+
        'tb_cli_interface( '+
        'CIF_CODPRJ, '+
        'CIF_CODCLI, '+
        'CIF_CODIFC, '+
        'CIF_ATIVO, '+
        'CIF_ATUALIZAR '+
        ') '+
        'VALUES( '+
        '?,'+
        '?,'+
        '?,'+
        '?,'+
        '?)';       
        Tb.sequelize
          .query(
            sqltxt,
            {
              replacements:[body.cif_codprj,body.cif_codcli,body.cif_codifc,body.cif_ativo,body.cif_atualizar],
              type: Tb.sequelize.QueryTypes.UPDATE,
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

module.exports = CliInterfaceController; 
