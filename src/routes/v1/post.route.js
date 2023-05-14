const express = require('express');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
const postController = require('../../controllers/post.controller');
const postValidation = require('../../validations/post.validation');

const router = express.Router();

router
  .route('/')
  .get(validate(postValidation.getPosts), postController.getPosts)
  .post(auth('managePosts'), validate(postValidation.createPosts), postController.createPost);

router.route('/:productId').get(validate(postValidation.getPosts), postController.getPosts);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Post Managment and Retreval
 */
/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a post
 *     description: Only admins can create posts.
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - stock
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               stock:
 *                 type: number
 *               price:
 *                 type: number
 *             example:
 *               name: fake name
 *               stock: 4
 *               price: 1.99
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Posts'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all posts
 *     description: serve public posts.
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: User name
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         description: User role
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of users
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Post'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
