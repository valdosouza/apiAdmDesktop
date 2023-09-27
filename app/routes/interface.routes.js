const { Router } = require("express");
  
const interface =  require("../endpoint/interface.endpoint.js");

const { withJWTAuthMiddleware } = require("express-kun");
const router = Router();

const protectedRouter = withJWTAuthMiddleware(router, process.env.SECRET);
/**
 * @swagger
 * components:
 *   schemas:
 *     Interface:
 *       type: object
 *       required:
 *         - IFC_CODIGO
 *         - IFC_CODPRJ
 *         - IFC_DESCRICAO
 *         - IFC_FR_NAME
 *         - IFC_CODMNU
 *         - IFC_SISTEMA
 *         - IFC_MENU 
 *       properties:
 *         IFC_CODIGO:
 *           type: integer
 *         IFC_CODPRJ:
 *           type: integer 
 *         IFC_DESCRICAO:
 *           type: string
 *         IFC_FR_NAME:
 *           type: string
 *         IFC_CODMNU:
 *           type: integer  
 *         IFC_SISTEMA:
 *           type: string
 *         IFC_MENU:
 *           type: string
 *  
 */

/**
 * @swagger
 * tags:
 *   name: Interface
 *   description: The Interface Exec managing API
 */

/**
 * @swagger
 * /interface:
 *   post:
 *     summary: Create a new script exec
 *     tags: [Interface]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             allOf:
 *               - $ref: '#/components/schemas/Interface'
 *     responses:
 *       200:
 *         description: The Interface was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Interface'
 *       500:
 *         description: Some server error
 */
router.post("/", interface.create);

/**
* @swagger
* /interface:
*  put:
*    summary: Update the Interface by the id
*    tags: [Interface]
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            allOf:
*              - $ref: '#/components/schemas/Interface'
*    responses:
*      200:
*        description: The Interface was successfully created
*        content:
*          application/json:
*            schema:
*              allOf:
*                - $ref: '#/components/schemas/Interface'
*      500:
*        description: Some server error
* 
*/
router.put("/:id", interface.update);

/**
* @swagger
* /interface/getlist/{CIF_CODCLI}/{CIF_CODPRJ}:
*   get:
*     summary: Returns the list of all the Interface
*     tags: [Interface]
*     parameters:
*       - in: path
*         name: SCP_CODPRJ
*       - in: path
*         name: SCP_CODCLI
*     responses:
*       200:
*         description: The  List of Interface
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 allOf:
*                   - $ref: '#/components/schemas/Interface'
*/
router.get("/getlist/:CIF_CODCLI/:CIF_CODPRJ", interface.getList);


module.exports = router;  