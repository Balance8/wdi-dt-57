const express = require('express');
const router = express.Router();
const postsController = require('./../controllers/postsController');

router.post('/:id/posts', postsController.create);
router.delete('/:id/posts/:id', postsController.delete);

module.exports = router;
