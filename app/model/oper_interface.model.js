const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_oper_interface', {
    OPF_CODIGO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OPF_DESCRICAO: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    OPF_IMAGEM: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_oper_interface',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OPF_CODIGO" },
        ]
      },
    ]
  });
};
