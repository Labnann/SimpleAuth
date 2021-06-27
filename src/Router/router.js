const router = require('express').Router();

const controllers = {
    loginController : require('./../controllers/LoginController'),
    registerController: require('./../controllers/registerController')
}

router.get('/login',controllers.loginController.show);
router.get('/register',controllers.registerController.show);

router.post('/login',controllers.loginController.post);
router.post('/register',controllers.registerController.post);

module.exports =router;