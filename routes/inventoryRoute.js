const express = require('express');
const auth_middleware = require('../middlewares/auth_middleware');
const { inventoryController, getinventoryController } = require('../controller/inventory_controller');

const router = express.Router();

router.post('/',auth_middleware,inventoryController);
router.get('/',auth_middleware,getinventoryController)

module.exports = router;