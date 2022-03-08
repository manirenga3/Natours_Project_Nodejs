import express from 'express';

import * as ViewControllers from './../controllers/viewControllers.js';
import * as AuthControllers from './../controllers/authControllers.js';
import * as BookingControllers from './../controllers/bookingControllers.js';

const router = express.Router();

router.get('/', AuthControllers.isLoggedIn, ViewControllers.getOverview);
router.get('/tour/:slug', AuthControllers.isLoggedIn, ViewControllers.getTour);
router.get('/login', AuthControllers.isLoggedIn, ViewControllers.getLoginForm);
router.get(
  '/signup',
  AuthControllers.isLoggedIn,
  ViewControllers.getSignupForm
);
router.get('/signup/confirm_account', AuthControllers.signupConfirm);

router.get('/me', AuthControllers.protect, ViewControllers.getAccount);

router.get(
  '/my-tours',
  BookingControllers.createBookingCheckout,
  AuthControllers.protect,
  ViewControllers.getMyTours
);

export { router as viewRouter };
