const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_projeto', {
    prj_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field : "PRJ_CODIGO",
    },
    prj_codetb: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field : "PRJ_CODETB",
    },
    prj_numero: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field : "PRJ_NUMERO",
    },
    prj_data: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field : "PRJ_DATA",
    },
    prj_codetd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field : "PRJ_CODETD",
    },
    prj_codsit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field : "PRJ_CODSIT",
    },
    prj_descricao: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field : "PRJ_DESCRICAO",
    },
    prj_detalhe: {
      type: DataTypes.TEXT,
      allowNull: false,
      field : "PRJ_DETALHE",
    },
    prj_dt_inicial: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field : "PRJ_DT_INICIAL",
    },
    prj_dt_final: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field : "PRJ_DT_FINAL",
    },
    prj_hr_inicial: {
      type: DataTypes.TIME,
      allowNull: false,
      field : "PRJ_HR_INICIAL",
    },
    prj_hr_final: {
      type: DataTypes.TIME,
      allowNull: false,
      field : "PRJ_HR_FINAL",
    },
    prj_path_local: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field : "PRJ_PATH_LOCAL",
    },
    prj_path_ftp: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field : "PRJ_PATH_FTP",
    },
    prj_atualizacao: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field : "PRJ_ATUALIZACAO",
    }
  }, {
    sequelize,
    tableName: 'tb_projeto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PRJ_CODIGO" },
        ]
      },
    ]
  });
};
