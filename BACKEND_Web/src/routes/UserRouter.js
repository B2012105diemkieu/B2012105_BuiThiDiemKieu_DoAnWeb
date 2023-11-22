const express = require("express");
const router = express.Router()
const userController = require('../controllers/UserController');
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.get('/get-details-email/:email', userController.showAUser)
//router.put('/update-user-email/:email',  userController.updateUserEmail) //authUserMiddleWare,

router.post('/sign-up', userController.createUser)
router.post('/sign-in', userController.loginUser)
router.post('/log-out', userController.logoutUser)
router.put('/update-user/:id',  userController.updateUser) //authUserMiddleWare,
router.delete('/delete-user/:id',authMiddleWare,  userController.deleteUser) //authMiddleWare, 
router.get('/getAll', authMiddleWare, userController.getAllUser) //authMiddleWare,
router.get('/get-details/:id', userController.getDetailsUser) //authUserMiddleWare,
router.post('/refresh-token', userController.refreshToken)
router.post('/delete-many', authMiddleWare, userController.deleteMany)

module.exports = router