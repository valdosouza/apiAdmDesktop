const { Router } = require("express");
  
const itensIFC =  require("../endpoint/itens_ifc.endpoint.js");

const { withJWTAuthMiddleware } = require("express-kun");
const router = Router();

const protectedRouter = withJWTAuthMiddleware(router, process.env.SECRET);
/**
 * @swagger
 * components:
 *   schemas:
 *     ItensIfc:
 *       type: object
 *       required:
 *         - iif_codigo
 *         - iif_codifc
 *         - iif_codopf
 *       properties:
 *         iif_codigo:
 *           type: integer
 *         iif_codifc:
 *           type: integer
 *         iif_codopf:
 *           type: integer
 */

/**
 * @swagger
 * tags:
 *   name: ItensIfc
 *   description: The Itens da Interface managing API
 */

/**
 * @swagger
 * /itensifc:
 *   post:
 *     summary: Create a new itens Interface
 *     tags: [ItensIfc]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             allOf:
 *               - $ref: '#/components/schemas/ItensIfc'
 *     responses:
 *       200:
 *         description: The ItensIfc was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ItensIfc'
 *       500:
 *         description: Some server error
 */
router.post("/", itensIFC.create);

/**
* @swagger
* /itensifc/{ifc_codigo}:
*  delete:
*    summary: Delete All by Interface Id
*    tags: [ItensIfc]
*    parameters:
*      - in: path
*        name: ifc_codigo
*    responses:
*      200:
*        description: The Items Interface was successfully deleted
*        content:
*          application/json:
*            schema:
*              allOf:
*                - $ref: '#/components/schemas/OperInterface'
*      500:
*        description: Some server error
* 
*/
router.delete("/:ifc_codigo", itensIFC.delete);

/**
* @swagger
* /itensifc/getlist/{cif_codprj}:
*   get:
*     summary: Returns the list of all the ItensIfc
*     tags: [ItensIfc]
*     parameters:
*       - in: path
*         name: cif_codprj
*     responses:
*       200:
*         description: The  List of ItensIfc
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 allOf:
*                   - $ref: '#/components/schemas/ItensIfc'
*/
router.get("/getlist/:cif_codprj", itensIFC.getList);


module.exports = router;  