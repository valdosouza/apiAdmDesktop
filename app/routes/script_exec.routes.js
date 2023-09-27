const { Router } = require("express");
  
const scriptExec =  require("../endpoint/script_exec.endpoint.js");

const { withJWTAuthMiddleware } = require("express-kun");
const router = Router();

const protectedRouter = withJWTAuthMiddleware(router, process.env.SECRET);
/**
 * @swagger
 * components:
 *   schemas:
 *     ScriptExec:
 *       type: object
 *       required:
 *         - scx_codscp
 *         - scx_datatime
 *         - scx_codcli
 *         - scx_resultado
 *       properties:
 *         scx_codscp:
 *           type: integer
 *         scx_codcli:
 *           type: integer
 *         scx_resultado:
 *           type: string
 *         scx_datatime:
 *           type: string
 *  
 */

/**
 * @swagger
 * tags:
 *   name: ScriptExec
 *   description: The Script Exec managing API
 */

/**
 * @swagger
 * /scriptexec:
 *   post:
 *     summary: Create a new script exec
 *     tags: [ScriptExec]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             allOf:
 *               - $ref: '#/components/schemas/ScriptExec'
 *     responses:
 *       200:
 *         description: The Script was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ScriptExec'
 *       500:
 *         description: Some server error
 */
router.post("/", scriptExec.create);



module.exports = router;  