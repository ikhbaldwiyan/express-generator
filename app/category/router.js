const express = require('express');
const router = express.Router();
const categoryController = require('./controller');

router.get('/', categoryController.index);
router.get('/create', categoryController.viewCreate);
router.post('/create', categoryController.actionCreate);
router.get('/edit/:id', categoryController.viewEdit);
router.put('/edit/:id', categoryController.actionEdit);
router.delete('/delete/:id', categoryController.actionDelete);

module.exports = router;
