const { Router } = require("express");
  
const cliente =  require("../endpoint/cliente.endpoint.js");

const { withJWTAuthMiddleware } = require("express-kun");
const router = Router();

const protectedRouter = withJWTAuthMiddleware(router, process.env.SECRET);
/**
 * @swagger
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       required:
 *         - cli_codetd
 *         - cli_consumidor
 *         - cli_ativo
 *         - cli_atualizar
 *       properties:
 *         cli_codetd:
 *           type: integer
 *         cli_consumidor:
 *           type: string
 *         cli_micro_emp:
 *           type: string
 *         cli_st_cred:
 *           type: string
 *         cli_vl_cred:
 *           type: number
 *         cli_ml_drt:
 *           type: string
 *         cli_codtrp:
 *           type: integer
 *         cli_dt_ult_mov:
 *           type: string
 *         cli_codfpg:
 *           type: integer
 *         cli_ativo:
 *           type: string
 *         cli_atualizar:
 *           type: string
 *         cli_lojista:
 *           type: string 
 *  
 *     projetocliente:
 *       type: object
 *       properties:
 *         pjc_codcli:
 *           type: integer
 *         pjc_codprj:
*           type: integer
 */

/**
 * @swagger
 * tags:
 *   name: Cliente
 *   description: The Cliente managing API
 */

/**
 * @swagger
 * /cliente:
 *   post:
 *     summary: Create a new cliente
 *     tags: [Cliente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             allOf:
 *               - $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: The Cliente was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Cliente'
 *       500:
 *         description: Some server error
 */
router.post("/", cliente.create);

/**
* @swagger
* /cliente:
*  put:
*    summary: Update the Cliente by the id
*    tags: [Cliente]
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            allOf:
*              - $ref: '#/components/schemas/Cliente'
*    responses:
*      200:
*        description: The Cliente was successfully created
*        content:
*          application/json:
*            schema:
*              allOf:
*                - $ref: '#/components/schemas/Cliente'
*      500:
*        description: Some server error
* 
*/
router.put("/", cliente.update);

/**
* @swagger
* /cliente/avisar/{cli_codetd}:
*  put:
*    summary: Update the Cliente by the id
*    tags: [Cliente]
*    parameters:
*      - in: path
*        name: cli_codetd
*    responses:
*      200:
*        description: The Cliente was successfully awareness
*      500:
*        description: Some server error
* 
*/
router.put("/avisar/:cli_codetd", cliente.avisar);

/**
* @swagger
* /cliente/desabilitarmenus/{cli_codetd}:
*  put:
*    summary: Desabilita os menus do cliente
*    tags: [Cliente]
*    parameters:
*      - in: path
*        name: cli_codetd
*    responses:
*      200:
*        description: The Menus of customer was disabled
*      500:
*        description: Some server error
* 
*/
router.put("/desabilitarmenus/:cli_codetd", cliente.desabilitarMenus);

/**
* @swagger
* /cliente/getlist:
*   get:
*     summary: Returns the list of all the Scripts
*     tags: [Cliente]
*     responses:
*       200:
*         description: The  List of Scripts
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 allOf:
*                   - $ref: '#/components/schemas/Cliente'
*/
router.get("/getlist", cliente.getList);

/**
* @swagger
* /cliente/get/{CLI_CODETD}:
*   get:
*     summary: Returns the client record by id
*     tags: [Cliente]
*     parameters:
*       - in: path
*         name: CLI_CODETD
*     responses:
*       200:
*         description: The cliente return
*         content:
*           application/json:
*             schema:
*               allOf:
*                 - $ref: '#/components/schemas/Cliente'
*/
router.get("/get/:CLI_CODETD", cliente.get);

/**
* @swagger
* /cliente/getProject/{ETD_CNPJ}:
*   get:
*     summary: Returns the client record by id
*     tags: [Cliente]
*     parameters:
*       - in: path
*         name: ETD_CNPJ
*     responses:
*       200:
*         description: The Project client returns
*         content:
*           application/json:
*             schema:
*               allOf:
*                 - $ref: '#/components/schemas/ProjetoCliente'
*/
router.get("/getProject/:ETD_CNPJ", cliente.getProject);

module.exports = router;  