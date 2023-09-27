const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_itens_ifc', {
    IIF_CODIGO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IIF_CODIFC: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IIF_CODOPF: {
      type: DataTypes.INTEGER,
      allowNull: false
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
