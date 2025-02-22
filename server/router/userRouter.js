import express from 'express'
import { loginUser, registerUser, userCredit } from '../controllers/userController.js';
import userAuth from '../middleware/auth.js';
const app = express()
const userRouter = express.Router();

// POST method to create API for both signup & signIn
userRouter.post('/signup', registerUser );
userRouter.post('/signin', loginUser);
userRouter.get('/credit', userAuth, userCredit);

//export the router
export default userRouter;