import { IUserService } from "./userService.interface";

class UserService implements IUserService {

  async getRandomTest(): Promise<any> {
    try {
      return "it works";
    } catch (error) {
      return error;
    }
  }
}

export default new UserService();