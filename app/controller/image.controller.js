const Base = require('./base.controller.js');
const db = require("../model/index.js");
const fs = require('fs');

class ImageController extends Base {

  static async create(body) {
    const promise = new Promise(async (resolve, reject) => {
      try {
        // Decodifique o conteúdo Base64 em um Buffer
        const buffer = Buffer.from(body.content, 'base64');

        // Especifique o caminho onde deseja salvar a imagem
        const caminhoDaImagem = "C:/Domains/gestaosetes.com.br/gestaosetes.com.br/public_html/uploads/gsx-shop/diasespeciais/large/"+ body.file_name; // Altere o caminho e o nome do arquivo conforme necessário

        // Grave o Buffer como uma imagem no arquivo
        fs.writeFile(caminhoDaImagem, buffer, (erro) => {
          if (erro) {
            resolve({result : 'Erro ao gravar a imagem:', erro});
          } else {
            resolve({result : 'Imagem gravada com sucesso em:' + caminhoDaImagem  });            
          }
        });       
      } catch (error) {
        reject("ImageController.create:" + error);
      }

    });
    return promise;
  }
}

module.exports = ImageController; 
