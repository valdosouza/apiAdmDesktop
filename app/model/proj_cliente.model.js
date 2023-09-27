const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_proj_cliente', {
    PJC_CODPRJ: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tb_projeto',
        key: 'PRJ_CODIGO'
      }
    },
    PJC_CODCLI: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tb_cliente',
        key: 'CLI_CODETD'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_proj_cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PJC_CODPRJ" },
          { name: "PJC_CODCLI" },
        ]
      },
      {
        name: "PJC_CODCLI",
        using: "BTREE",
        fields: [
          { name: "PJC_CODCLI" },
        ]
      },
    ]
  });
};
