const Base = require('./base.controller.js');
const db = require("../model/index.js");
const Tb = db.operInterface;

class OperInterfaceController extends Base {

  static async create(body) {
    const promise = new Promise(async (resolve, reject) => {
      try {       

        Tb.create(body)
          .then((data) => {
            resolve(data);
          })
      } catch (error) {
        reject("OperInterfaceController.create:" + error);
      }

    });
    return promise;
  }

  static async update(body) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        Tb.update(body, {
          where: { opf_codigo: body.opf_codigo },
        })
        .then((data) => {
          resolve(data);
        })        
      } catch (error) {
        reject("OperInterfaceController.update:" + error);
      }
    });
    return promise;
  }

  static async delete(opf_codigo) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        Tb.destroy({
          where: { opf_codigo: opf_codigo },
        })
        .then((data) => {
          resolve(data);
         });
      } catch (error) {
        reject("OperInterfaceController.update:" + error);
      }
    });
    return promise;
  }

  static async getList() {
    const promise = new Promise(async (resolve, reject) => {
      try {
        var sqltxt =
        'select '+
        'opf_codigo, '+
        'opf_descricao, '+
        'convert(opf_imagem using utf8) as opf_imagem '+
        'from tb_oper_interface ';

        Tb.sequelize
          .query(
            sqltxt,
            {        
              type: Tb.sequelize.QueryTypes.SELECT,
            }
          )
          .then((data) => {
            var dataResult = [];
            var dataBuffer = '';
            for (var item of data){
              //dataBuffer = Buffer.from(item.opf_imagem.toString());
              dataResult.push({
                opf_codigo : item.opf_codigo,
                opf_descricao : item.opf_descricao,
                opf_imagem: item.opf_imagem,
                //opf_imagem : dataBuffer.toString('base64')
              });
            }
            resolve(dataResult);
          })
      } catch (error) {
        resolve(error);
      }
    });
    return promise;
  }

}

module.exports = OperInterfaceController; 
