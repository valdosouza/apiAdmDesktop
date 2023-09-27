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
 *         - PRJ_CODIGO
 *         - PRJ_CODETB
 *         - PRJ_NUMERO
 *         - PRJ_DATA
 *         - PRJ_CODETD
 *         - PRJ_CODSIT
 *         - PRJ_DESCRICAO
 *         - PRJ_DETALHE
 *         - PRJ_DT_INICIAL
 *         - PRJ_DT_FINAL
 *         - PRJ_HR_INICIAL
 *         - PRJ_HR_FINAL 
 *         - PRJ_ATUALIZACAO
 * 
 *       properties:
 *         SCP_CODPRJ:
 *           type: integer
 *         PRJ_CODIGO:
 *           type: integer
 *         PRJ_CODETB:
 *           type: integer
 *         PRJ_NUMERO:
 *           type: string
 *         PRJ_DATA:
 *           type: string
 *         PRJ_CODETD:
 *           type: integer
 *         PRJ_CODSIT:
 *           type: integer
 *         PRJ_DESCRICAO:
 *           type: string
 *         PRJ_DETALHE:
 *           type: string
 *         PRJ_DT_INICIAL:
 *           type: string
 *         PRJ_DT_FINAL:
 *           type: string
 *         PRJ_HR_INICIAL:
 *           type: string
 *         PRJ_HR_FINAL:
 *           type: string
 *         PRJ_PATH_LOCAL:
 *           type: string
 *         PRJ_PATH_FTP:
 *           type: string
 *         PRJ_ATUALIZACAO:
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
* /projeto/get/{PRJ_CODIGO}:
*   get:
*     summary: Returns the list of all the Scripts
*     tags: [Projeto]
*     parameters:
*       - in: path
*         name: PRJ_CODIGO
*     responses:
*       200:
*         description: The  Project returns
*         content:
*           application/json:
*             schema:
*               allOf:
*                 - $ref: '#/components/schemas/Projeto'
*/
router.get("/get/:PRJ_CODIGO", projeto.get);

module.exports = router;  