const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_interface', {
    ifc_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field : "IFC_CODIGO"
    },
    ifc_codprj: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field :  "IFC_CODPRJ"
      
    },
    ifc_descricao: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field : "IFC_DESCRICAO", 
    },
    ifc_fr_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field : "IFC_FR_NAME"      
    },
    ifc_codmnu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field : "IFC_CODMNU"
    },
    ifc_sistema: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      field : "IFC_SISTEMA"      
    },
    ifc_menu: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "S",
      field : "IFC_MENU"
    }
  }, {
    sequelize,
    tableName: 'tb_interface',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IFC_CODIGO" },
        ]
      },
    ]
  });
};
