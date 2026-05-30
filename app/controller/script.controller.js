const Base = require('./base.controller.js');
const db = require("../model/index.js");
const Tb = db.script;

class ScriptController extends Base {

  static async create(body) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        var data = {
          scp_codigo : body.scp_codigo,
          scp_codprj: body.scp_codprj,
          scp_codcli: body.scp_codcli,
          scp_comando: body.scp_comando
        }
        
        Tb.create(data)
          .then((data) => {
            resolve(data);
          })
          .catch(error => { reject("ScriptController.create:" + error); })
      } catch (error) {
        reject("ScriptController.create:" + error);
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
        .then(result => { resolve(result); })
        .catch(error => { reject("ScriptController.update:" + error); })
      } catch (error) {
        reject("ScriptController.update:" + error);
      }
    });
    return promise;
  }

  static async getList(scp_codcli) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        var sqltxt =
        'SELECT * '+
        'FROM tb_script '+
        'WHERE SCP_CODIGO not in ( '+
        'select SCX_CODSCP '+
        'FROM tb_script_exec '+
        'WHERE SCX_CODCLI = ? )';

        Tb.sequelize
          .query(
            sqltxt,
            {
              replacements: [scp_codcli],
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

module.exports = ScriptController; 
