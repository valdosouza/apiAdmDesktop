const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.DB, 
  dbConfig.USER, 
  dbConfig.PASSWORD,
     {  host: dbConfig.HOST,      
        dialect: dbConfig.dialect,
        pool: { max: dbConfig.pool.max,
                min: dbConfig.pool.min,
                acquire: dbConfig.pool.acquire,
                idle: dbConfig.pool.idle
              },  
        define: { underscored: true,
                  freezeTableName: true, // use singular table name
                  timestamps: false // I don't want timestamp fields by default
                },
        dialectOptions: { dateStrings: true,
                          typeCast(field, next) {            
                            if ((field.type === 'DATETIME') || (field.type === 'DATE') ){
                              return field.string();
                            }
                            return next();
                          }
                        },
        timezone: "-03:00",
        seederStorage: "sequelize",        
      }
);

const db = {};

db.Sequelize = Sequelize;

db.institution = require("./institution.model.js")(sequelize, Sequelize);

db.cliInterface = require("./cli_interface.model.js")(sequelize, Sequelize);

db.interface = require("./interface.model.js")(sequelize, Sequelize);

db.itensIFC = require("./itens_ifc.model.js")(sequelize, Sequelize);

db.licenca = require("./licenca.model.js")(sequelize, Sequelize);

db.operInterface = require("./oper_interface.model.js")(sequelize, Sequelize);

db.projCliente = require("./proj_cliente.model.js")(sequelize, Sequelize);

db.projeto = require("./projeto.model.js")(sequelize, Sequelize);

db.cliente = require("./cliente.model.js")(sequelize, Sequelize);

db.script = require("./script.model.js")(sequelize, Sequelize);

db.scriptExec = require("./script_exec.model.js")(sequelize, Sequelize);

module.exports = db;