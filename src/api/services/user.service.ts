import { PrivateApi } from '..';
import { IUser } from '../../types/api';

class UserApi extends PrivateApi {
  constructor() {
    super('/users');
  }

  getNominees = async () => await this.get<IUser[]>('/nominees');
  getUsers = async () => await this.get<IUser[]>('/');
  updateUser = async ({ id, data }: { id: string; data: Partial<IUser> }) =>
    await this.put<IUser>('/' + id, data);
  deleteUser = async (id: string) => await this.delete('/' + id);
}

export default new UserApi();
