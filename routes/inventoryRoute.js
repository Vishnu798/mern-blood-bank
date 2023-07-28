const express = require('express');
const auth_middleware = require('../middlewares/auth_middleware');
const { inventoryController, getinventoryController, getDonarsController, hospitalController, organizationController } = require('../controller/inventory_controller');

const router = express.Router();

router.post('/',auth_middleware,inventoryController);
router.get('/',auth_middleware,getinventoryController);

router.get('/get-donars',auth_middleware, getDonarsController)
router.get('/get-hospital',auth_middleware, hospitalController)
router.get('/get-organization',auth_middleware, organizationController)



module.exports = router;