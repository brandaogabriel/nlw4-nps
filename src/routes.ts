import { Router } from 'express';
import { SendMailController } from './controllers/SendMailController';
import { SurveyController } from './controllers/SurveyController';
import { UserController } from './controllers/UserControllers';

const router = Router();
const userController = new UserController();
const surveyController = new SurveyController();
const sendEmailController = new SendMailController();

router.post("/users", userController.create);

router.post("/surveys", surveyController.create);
router.get("/surveys", surveyController.findAll);

router.post("/sendEmail", sendEmailController.execute);

export { router };
