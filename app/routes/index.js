const routes = require("express").Router();

const institution = require("../routes/institution.routes");
routes.use("/institution", institution);

const script = require("../routes/script.routes");
routes.use("/script", script);

const scriptExec = require("../routes/script_exec.routes");
routes.use("/scriptexec", scriptExec);

const interface = require("../routes/interface.routes");
routes.use("/interface", interface);

const operInterface = require("../routes/oper_interface.routes");
routes.use("/operinterface", operInterface);

const itensIfc = require("../routes/itens_ifc.routes");
routes.use("/itensifc", itensIfc);

const cliente = require("../routes/cliente.routes");
routes.use("/cliente", cliente);

const cliInterface = require("../routes/cli_interface.routes");
routes.use("/cliinterface", cliInterface);

const projeto = require("../routes/projeto.routes");
routes.use("/projeto", projeto);

const image = require("../routes/image.routes");
routes.use("/image", image);

module.exports = routes;