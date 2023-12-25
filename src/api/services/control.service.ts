import { PrivateApi } from '..';

class ControlApi extends PrivateApi {
  constructor() {
    super('/controls');
  }

  update = async (activate: boolean) => await this.put('/', { activate });
}

export default new ControlApi();
