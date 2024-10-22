import express from 'express'
import { CreateUser, GetMyBlogs, LoginUser, PostBlog, MyLikedBlogs, LogoutUser, UserProfile, EditProfile} from '../controllers/userController.js';
import authenticateToken from '../middlewares/authentication.middlewares.js';

import { Router } from 'express';

const router = Router();

router.route('/CreateUser').post(CreateUser);

router.route('/LoginUser').post(LoginUser);

router.route('/PostBlog').post(authenticateToken, PostBlog);

router.route('/GetMyBlogs').get(authenticateToken, GetMyBlogs);

router.route('/MyLikedBlogs').get(authenticateToken, MyLikedBlogs);

router.route('/LogoutUser').get(authenticateToken, LogoutUser);

router.route('/Profile').get(authenticateToken, UserProfile);

router.route('/editProfile').put(authenticateToken, EditProfile);




export default router;