const Base = require('./base.controller.js');
const db = require("../model/index.js");
const Tb = db.cliente;
const TbCliInterface = db.cliInterface;

class ClienteController extends Base {

  static async create(body) {
    const promise = new Promise(async (resolve, reject) => {
      try {      
        Tb.create(data)
          .then((data) => {
            resolve(data);
          })
      } catch (error) {
        reject("ClienteController.create:" + err);
      }

    });
    return promise;
  }

  static async update(body) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        Tb.update(body, {
          where: { cli_codetd: body.cli_codetd },
        })
        .then((data)=>{
          resolve(data);
        })
        
      } catch (error) {
        reject("ClienteController.update:" + err);
      }
    });
    return promise;
  }

  static async avisar(cli_codetd) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        Tb.update({cli_atualizar:'S'}, {
          where: { cli_codetd: cli_codetd },
        })
        .then((data)=>{
          resolve(data);
        })
        
      } catch (error) {
        reject("ClienteController.avisar:" + err);
      }
    });
    return promise;
  }
  
  static async desabilitarMenus(cli_codetd) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        TbCliInterface.update({cif_ativo :'N'}, {
          where: { cif_codcli : cli_codetd,
                   cif_ativo : 'S',
                 },
        })
        .then((data)=>{
          resolve(data);
        })
        
      } catch (error) {
        reject("ClienteController.desabilitamenus:" + err);
      }
    });
    return promise;
  }

  static async getList() {
    const promise = new Promise(async (resolve, reject) => {
      try {
        var sqltxt =
          'select *  ' +
          'from tb_cliente   ';
        Tb.sequelize
          .query(
            sqltxt,
            {              
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

  static async get(CLI_CODETD) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        var sqltxt =
          'select *  ' +
          'from tb_cliente   '+
          'WHERE CLI_CODETD = ?';
        Tb.sequelize
          .query(
            sqltxt,
            {              
              replacements: [CLI_CODETD],
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

  static async getProject(ETD_CNPJ) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        var sqltxt =
        'SELECT prjc.PJC_CODPRJ,prjc.PJC_CODCLI '+
        'FROM tb_proj_cliente prjc  '+
        '  inner join tb_entidade cli '+
        '  on (cli.ETD_CODIGO = prjc.PJC_CODCLI) '+
        ' WHERE ETD_CNPJ_CPF = ?';
        Tb.sequelize
          .query(
            sqltxt,
            {              
              replacements: [ETD_CNPJ],
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

module.exports = ClienteController; 
