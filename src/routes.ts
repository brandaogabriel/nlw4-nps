import { Router } from 'express';
import { SurveyController } from './controllers/SurveyController';
import { UserController } from './controllers/UserControllers';

const router = Router();
const userController = new UserController();
const surveyController = new SurveyController();

router.post("/users", userController.create);

router.post("/surveys", surveyController.create);
router.get("/surveys", surveyController.findAll);


export { router };
