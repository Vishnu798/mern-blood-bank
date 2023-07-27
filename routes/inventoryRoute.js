const express = require('express');
const auth_middleware = require('../middlewares/auth_middleware');
const { inventoryController, getinventoryController, getDonarsController } = require('../controller/inventory_controller');

const router = express.Router();

router.post('/',auth_middleware,inventoryController);
router.get('/',auth_middleware,getinventoryController);

router.get('/get-donars',auth_middleware, getDonarsController)

module.exports = router;