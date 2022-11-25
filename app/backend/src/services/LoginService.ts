import { compareSync } from 'bcryptjs';
import UserModel from '../database/models/UserModel';
import IError from '../interfaces/IError';
import ILogin from '../interfaces/Ilogin';
import IUser from '../interfaces/IUser';
import { generateToken } from '../utils/token';

export default class LoginService {
  static async login(user: ILogin): Promise<IError> {
    const login = await UserModel.findOne({ where: { email: user.email } }) as IUser;

    if (!login) {
      return { error: true, message: 'Incorrect email or password' };
    }

    if (!compareSync(user.password, login.password)) {
      return { error: true, message: 'Incorrect email or password' };
    }

    return { error: false, message: generateToken(login.id) };
  }

  static async getUserRole(id: number): Promise<{ role: string }> {
    const login = await UserModel.findOne({ where: { id } }) as IUser;

    return { role: login.role };
  }
}
