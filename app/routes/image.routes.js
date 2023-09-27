const { Router } = require("express");
  
const image =  require("../endpoint/image.endpoint.js");

const { withJWTAuthMiddleware } = require("express-kun");
const router = Router();

const protectedRouter = withJWTAuthMiddleware(router, process.env.SECRET);
/**
 * @swagger
 * components:
 *   schemas:
 *     Image:
 *       type: object
 *       required:
 *         - id
 *         - tb_institution_id
 *         - table_id
 *         - content
 *       properties:
 *         id:
 *           type: integer
 *         tb_institution_id:
 *           type: integer
 *         kind:
 *           type: string
 *         target:
 *           type: string
 *         table_id:
 *           type: string
 *         fileName:
 *           type: string
 *         content:
 *           type: string
 *         extension:
 *           type: string
 *         link:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: Image
 *   description: The Image managing API
 */

/**
 * @swagger
 * /image:
 *   post:
 *     summary: Create a new image
 *     tags: [Image]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             allOf:
 *               - $ref: '#/components/schemas/Image'
 *     responses:
 *       200:
 *         description: The Image was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Image'
 *       500:
 *         description: Some server error
 */
router.post("/", image.create);


module.exports = router;  