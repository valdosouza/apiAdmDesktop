const { Router } = require("express");
  
const operInterface =  require("../endpoint/oper_interface.endpoint.js");

const { withJWTAuthMiddleware } = require("express-kun");
const router = Router();

const protectedRouter = withJWTAuthMiddleware(router, process.env.SECRET);
/**
 * @swagger
 * components:
 *   schemas:
 *     OperInterface:
 *       type: object
 *       required:
 *         - opf_codigo
 *         - opf_descricao
 *         - opf_imagem
 *       properties:
 *         opf_codigo:
 *           type: integer
 *         opf_descricao:
 *           type: string
 *         opf_imagem:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: OperInterface
 *   description: The OperInterface Exec managing API
 */

/**
 * @swagger
 * /operinterface:
 *   post:
 *     summary: Create a new script exec
 *     tags: [OperInterface]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             allOf:
 *               - $ref: '#/components/schemas/OperInterface'
 *     responses:
 *       200:
 *         description: The OperInterface was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/OperInterface'
 *       500:
 *         description: Some server error
 */
router.post("/", operInterface.create);

/**
* @swagger
* /operinterface:
*  put:
*    summary: Update the OperInterface by the id
*    tags: [OperInterface]
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            allOf:
*              - $ref: '#/components/schemas/OperInterface'
*    responses:
*      200:
*        description: The OperInterface was successfully created
*        content:
*          application/json:
*            schema:
*              allOf:
*                - $ref: '#/components/schemas/OperInterface'
*      500:
*        description: Some server error
* 
*/
router.put("/", operInterface.update);

/**
* @swagger
* /operinterface/{opf_codigo}:
*  delete:
*    summary: Delete the OperInterface by Interface Id
*    tags: [OperInterface]
*    parameters:
*      - in: path
*        name: opf_codigo
*    responses:
*      200:
*        description: The OperInterface was successfully created
*        content:
*          application/json:
*            schema:
*              allOf:
*                - $ref: '#/components/schemas/OperInterface'
*      500:
*        description: Some server error
* 
*/
router.delete("/:opf_codigo", operInterface.delete);

/**
* @swagger
* /operinterface/getlist:
*  get:
*    summary: Returns the list of all the OperInterface
*    tags: [OperInterface]
*    responses:
*      200:
*        description: The  List of OperInterface
*        content:
*          application/json:
*            schema:
*              type: array
*              items:
*                allOf:
*                  - $ref: '#/components/schemas/OperInterface'
*/
router.get("/getlist", operInterface.getList);


module.exports = router;  