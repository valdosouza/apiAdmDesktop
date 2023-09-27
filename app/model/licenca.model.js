const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_licenca', {
    LCS_CODIGO: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LCS_CODCLI: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LCS_VOLUME_HD: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    LCS_TIME_INSTALA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    LCS_IP_INSTALA: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    LCS_LIBERADO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "S"
    },
    LCS_SOLICITA: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    LCS_TIME_USO: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    LCS_ACESSOS: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_licenca',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LCS_CODIGO" },
        ]
      },
    ]
  });
};
