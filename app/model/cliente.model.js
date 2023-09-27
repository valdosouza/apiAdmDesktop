const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_script_exec', {
    
    cli_codetd:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,     
      field:"CLI_CODETD",
    },
    cli_consumidor:{
      type: DataTypes.TEXT,
      allowNull: true,
      primaryKey: false,      
      field:"CLI_CONSUMIDOR",
    },

    cli_micro_emp:{
      type: DataTypes.TEXT,
      allowNull: true,
      primaryKey: false,      
      field:"CLI_MICRO_EMP",
    },
    cli_st_cred :{
      type: DataTypes.TEXT,
      allowNull: true,
      primaryKey: false,
      field:"CLI_ST_CRED",
    },
    cli_vl_cred :{
      type: DataTypes.DECIMAL,
      allowNull: true,
      primaryKey: false,
      field:"CLI_VL_CRED",
    },
    cli_ml_drt :{
      type: DataTypes.TEXT,
      allowNull: true,
      primaryKey: false,
      field:"CLI_ML_DRT",
    },
    cli_codtrp :{
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: false,
      field:"CLI_CODTRP",
    },
    cli_dt_ult_mov:{
      type: DataTypes.DATE,
      allowNull: true,
      primaryKey: false,
      field:"CLI_DT_ULT_MOV",
    },
    cli_codfpg:{
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: false,
      field:"CLI_CODFPG",
    },
    cli_ativo:{
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: false,
      field:"CLI_ATIVO",
    },
    cli_atualizar:{
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: false,
      field:"CLI_ATUALIZAR",
    },
    cli_lojista:{
      type: DataTypes.TEXT,
      allowNull: true,
      primaryKey: false,
      field:"CLI_LOJISTA",
    }    
  }, {
    sequelize,
    tableName: 'tb_cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CLI_CODETD" },
        ]
      },     
    ]
  });
};
