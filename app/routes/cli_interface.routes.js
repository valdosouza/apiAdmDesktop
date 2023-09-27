const { Router } = require("express");
  
const cliinterface =  require("../endpoint/cli_interface.endpoint.js");

const { withJWTAuthMiddleware } = require("express-kun");
const router = Router();

const protectedRouter = withJWTAuthMiddleware(router, process.env.SECRET);
/**
 * @swagger
 * components:
 *   schemas:
 *     CliInterface:
 *       type: object
 *       required:
 *         - cif_codprj
 *         - cif_codcli
 *         - cif_codifc
 *         - cif_ativo
 *         - cif_atualizar
 *       properties:
 *         cif_codprj:
 *           type: integer
 *         cif_codcli:
 *           type: integer
 *         cif_codifc:
 *           type: integer
 *         cif_ativo:
 *           type: string
 *         cif_atualizar:
 *           type: string
 * 
 */

/**
 * @swagger
 * tags:
 *   name: CliInterface
 *   description: The Cliente Interfaces managing API
 */

/**
 * @swagger
 * /cliinterface:
 *   post:
 *     summary: Create/Update the Customer's interface
 *     tags: [CliInterface]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             allOf:
 *               - $ref: '#/components/schemas/CliInterface'
 *     responses:
 *       200:
 *         description: The Cliente was successfully created
 *       500:
 *         description: Some server error
 */
router.post("/", cliinterface.replace);


module.exports = router;  