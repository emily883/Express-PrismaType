import { Request, Response, Router } from 'express';
import { IRouter } from '../router.interface';
import userService from './services/userService'
const router = Router();

class UserRouter implements IRouter{
  get routes(){
    router.get('/', async (req: Request, res: Response) => {
      try {
        const quote = await userService.getRandomTest();
        return res.send(quote);
      } catch (err) {
        throw err;
      }
    });
    return router;
  }
}

export default new UserRouter();