const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_cli_interface', {
    cif_codprj: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tb_projeto',
        key: 'PRJ_CODIGO'
      }
    },
    cif_codcli: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tb_cliente',
        key: 'CLI_CODETD'
      }
    },
    cif_codifc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cif_ativo: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    cif_atualizar: {
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
