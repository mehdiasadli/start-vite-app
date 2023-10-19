import { PublicApi } from '..';
import { LoginSchemaType } from '../../schemas/LoginSchema';

class AuthApi extends PublicApi {
  constructor() {
    super('/auth');
  }

  signin = async (data: LoginSchemaType) =>
    await this.post<{ username: string; name: string }>('/signin', data);
}

export default new AuthApi();
