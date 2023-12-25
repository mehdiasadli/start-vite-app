import { PublicApi } from '..';
import { LoginSchemaType } from '../../schemas/LoginSchema';
import { ILoginResponse } from '../../types/api';

class AuthApi extends PublicApi {
  constructor() {
    super('/auth');
  }

  signin = async (data: LoginSchemaType) => await this.post<ILoginResponse>('/login', data);
}

export default new AuthApi();
