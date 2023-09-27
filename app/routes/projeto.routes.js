const { Router } = require("express");
  
const projeto =  require("../endpoint/projeto.endpoint.js");

const { withJWTAuthMiddleware } = require("express-kun");
const router = Router();

const protectedRouter = withJWTAuthMiddleware(router, process.env.SECRET);
/**
 * @swagger
 * components:
 *   schemas:
 *     Projeto:
 *       type: object
 *       required:
 *         - prj_codigo
 *         - prj_codetb
 *         - prj_numero
 *         - prj_data
 *         - prj_codetd
 *         - prj_codsit
 *         - prj_descricao
 *         - prj_detalhe
 *         - prj_dt_inicial
 *         - prj_dt_final
 *         - prj_hr_inicial
 *         - prj_hr_final 
 *         - prj_atualizacao
 * 
 *       properties:
 *         scp_codprj:
 *           type: integer
 *         prj_codigo:
 *           type: integer
 *         prj_codetb:
 *           type: integer
 *         prj_numero:
 *           type: string
 *         prj_data:
 *           type: string
 *         prj_codetd:
 *           type: integer
 *         prj_codsit:
 *           type: integer
 *         prj_descricao:
 *           type: string
 *         prj_detalhe:
 *           type: string
 *         prj_dt_inicial:
 *           type: string
 *         prj_dt_final:
 *           type: string
 *         prj_hr_inicial:
 *           type: string
 *         prj_hr_final:
 *           type: string
 *         prj_path_local:
 *           type: string
 *         prj_path_ftp:
 *           type: string
 *         prj_atualizacao:
 *           type: string
 * 
 *  
 */

/**
 * @swagger
 * tags:
 *   name: Projeto
 *   description: The Projeto managing API
 */

/**
 * @swagger
 * /projeto:
 *   post:
 *     summary: Create a new projeto
 *     tags: [Projeto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             allOf:
 *               - $ref: '#/components/schemas/Projeto'
 *     responses:
 *       200:
 *         description: The Projeto was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Projeto'
 *       500:
 *         description: Some server error
 */
router.post("/", projeto.create);

/**
* @swagger
* /projeto:
*  put:
*    summary: Update the Projeto by the id
*    tags: [Projeto]
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            allOf:
*              - $ref: '#/components/schemas/Projeto'
*    responses:
*      200:
*        description: The Projeto was successfully created
*        content:
*          application/json:
*            schema:
*              allOf:
*                - $ref: '#/components/schemas/Projeto'
*      500:
*        description: Some server error
* 
*/
router.put("/:id", projeto.update);

/**
* @swagger
* /projeto/getlist:
*   get:
*     summary: Returns the list of all the Scripts
*     tags: [Projeto]
*     responses:
*       200:
*         description: The  List of Scripts
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 allOf:
*                   - $ref: '#/components/schemas/Projeto'
*/
router.get("/getlist", projeto.getList);

/**
* @swagger
* /projeto/get/{prj_codigo}:
*   get:
*     summary: Returns the list of all the Scripts
*     tags: [Projeto]
*     parameters:
*       - in: path
*         name: prj_codigo
*     responses:
*       200:
*         description: The  Project returns
*         content:
*           application/json:
*             schema:
*               allOf:
*                 - $ref: '#/components/schemas/Projeto'
*/
router.get("/get/:prj_codigo", projeto.get);

module.exports = router;  