const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_cli_interface', {
    CIF_CODPRJ: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tb_projeto',
        key: 'PRJ_CODIGO'
      }
    },
    CIF_CODCLI: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tb_cliente',
        key: 'CLI_CODETD'
      }
    },
    CIF_CODIFC: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CIF_ATIVO: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    CIF_ATUALIZAR: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_cli_interface',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CIF_CODPRJ" },
          { name: "CIF_CODCLI" },
          { name: "CIF_CODIFC" },
        ]
      },
      {
        name: "CIF_CODIFC",
        using: "BTREE",
        fields: [
          { name: "CIF_CODIFC" },
        ]
      },
      {
        name: "CIF_CODCLI",
        using: "BTREE",
        fields: [
          { name: "CIF_CODCLI" },
        ]
      },
    ]
  });
};
