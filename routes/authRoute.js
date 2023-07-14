const express = require('express');
const {authController, loginController, currentUserController} = require('../controller/auth_controller');
const auth_middleware = require('../middlewares/auth_middleware');

const router = express.Router();

router.post('/register',authController);
router.post('/login',loginController)
router.get('/current-user',auth_middleware,currentUserController)

module.exports = router;