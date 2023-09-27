const Base = require('./base.controller.js');
const db = require("../model/index.js");
const Tb = db.scriptExec;

class ScriptExecController extends Base {

  static async create(body) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        var data = {
          scx_codscp : body.scx_codscp,          
          scx_codcli: body.scx_codcli,
          scx_resultado: body.scx_resultado
        }
        Tb.create(data)
          .then((data) => {
            resolve(data);
          })
      } catch (error) {
        reject("ScriptExecController.create:" + err);
      }

    });
    return promise;
  }

  

}

module.exports = ScriptExecController; 
