const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_oper_interface', {
    opf_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field : 'OPF_CODIGO'
    },
    opf_descricao: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field : 'OPF_DESCRICAO'
    },
    opf_imagem: {
      type: DataTypes.BLOB,
      allowNull: true,
      field: 'OPF_IMAGEM'
    }
  }, {
    sequelize,
    tableName: 'tb_oper_interface',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OPF_CODIGO" },
        ]
      },
    ]
  });
};
