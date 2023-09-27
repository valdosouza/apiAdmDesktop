const { Router } = require("express");
  
const script =  require("../endpoint/script.endpoint.js");

const { withJWTAuthMiddleware } = require("express-kun");
const router = Router();

const protectedRouter = withJWTAuthMiddleware(router, process.env.SECRET);
/**
 * @swagger
 * components:
 *   schemas:
 *     script:
 *       type: object
 *       required:
 *         - scp_codprj
 *         - scp_codcli
 *         - scp_comando
 *         - scp_datatime
 *       properties:
 *         scp_codprj:
 *           type: integer
 *         scp_codcli:
 *           type: integer
 *         scp_comando:
 *           type: string
 *         scp_datatime:
 *           type: string
 *  
 */

/**
 * @swagger
 * tags:
 *   name: Script
 *   description: The Script managing API
 */

/**
 * @swagger
 * /script:
 *   post:
 *     summary: Create a new script
 *     tags: [Script]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             allOf:
 *               - $ref: '#/components/schemas/Script'
 *     responses:
 *       200:
 *         description: The Script was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Script'
 *       500:
 *         description: Some server error
 */
router.post("/", script.create);

/**
* @swagger
* /script:
*  put:
*    summary: Update the Script by the id
*    tags: [Script]
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            allOf:
*              - $ref: '#/components/schemas/Script'
*    responses:
*      200:
*        description: The Script was successfully created
*        content:
*          application/json:
*            schema:
*              allOf:
*                - $ref: '#/components/schemas/Script'
*      500:
*        description: Some server error
* 
*/
router.put("/:id", script.update);

/**
* @swagger
* /script/getlist/{scp_codcli}:
*   get:
*     summary: Returns the list of all the Scripts
*     tags: [Script]
*     parameters:
*       - in: path
*         name: scp_codcli
*     responses:
*       200:
*         description: The  List of Scripts
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 allOf:
*                   - $ref: '#/components/schemas/Script'
*/
router.get("/getlist/:scp_codcli", script.getList);


module.exports = router;  