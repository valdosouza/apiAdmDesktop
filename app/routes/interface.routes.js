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
 *         - ifc_codigo
 *         - ifc_codprj
 *         - ifc_descricao
 *         - ifc_fr_name
 *         - ifc_codmnu
 *         - ifc_sistema
 *         - ifc_menu 
 *       properties:
 *         ifc_codigo:
 *           type: integer
 *         ifc_codprj:
 *           type: integer 
 *         ifc_descricao:
 *           type: string
 *         ifc_fr_name:
 *           type: string
 *         ifc_codmnu:
 *           type: integer  
 *         ifc_sistema:
 *           type: string
 *         ifc_menu:
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
router.put("/", interface.update);

/**
* @swagger
* /interface/{ifc_codigo}:
*  delete:
*    summary: Delete the Interface by Id
*    tags: [Interface]
*    parameters:
*      - in: path
*        name: ifc_codigo
*    responses:
*      200:
*        description: The Interface was successfully deleted
*        content:
*          application/json:
*            schema:
*              allOf:
*                - $ref: '#/components/schemas/OperInterface'
*      500:
*        description: Some server error
* 
*/
router.delete("/:ifc_codigo", interface.delete);

/**
* @swagger
* /interface/getlist/{cif_codcli}/{cif_codprj}:
*   get:
*     summary: Returns the list of all the Interface
*     tags: [Interface]
*     parameters:
*       - in: path
*         name: cif_codprj
*       - in: path
*         name: cif_codcli
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
router.get("/getlist/:cif_codcli/:cif_codprj", interface.getList);


module.exports = router;  