const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_itens_ifc', {
    iif_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field : 'IIF_CODIGO'
    },
    iif_codifc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field : 'IIF_CODIFC'
    },
    iif_codopf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field : 'IIF_CODOPF'
    }
  }, {
    sequelize,
    tableName: 'tb_itens_ifc',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IIF_CODIGO" },
        ]
      },
    ]
  });
};
