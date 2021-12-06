const express = require('express');
const mainController = require("../controllers/mainController");
const router = express.Router();

router.get('/', mainController.index);
router.get('/carrito-de-compras', mainController.productCart);
router.get('/detalle-producto', mainController.productDetail);
router.get('/ingresar', mainController.login);
router.get('/registro', mainController.register);


module.exports = router;