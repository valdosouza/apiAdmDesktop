const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_script', {
    scp_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    scp_codprj: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_projeto',
        key: 'PRJ_CODIGO'
      }
    },
    scp_codcli: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    scp_datatime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SCP_DATATIME"
    },
    scp_comando: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'tb_script',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SCP_CODIGO" },
        ]
      },
      {
        name: "SCP_CODPRJ",
        using: "BTREE",
        fields: [
          { name: "SCP_CODPRJ" },
        ]
      },
    ]
  });
};
