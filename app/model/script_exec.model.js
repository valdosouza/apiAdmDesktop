const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_script_exec', {
    scx_codscp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tb_script',
        key: 'SCP_CODIGO'
      }
    },
    scx_codcli: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: "SCX_CODCLI"
    },
    scx_resultado: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      field: "SCX_RESULTADO"
    },
    scx_datatime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SCX_DATATIME"
    }
  }, {
    sequelize,
    tableName: 'tb_script_exec',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SCX_CODSCP" },
          { name: "SCX_CODCLI" },
        ]
      },     
    ]
  });
};
