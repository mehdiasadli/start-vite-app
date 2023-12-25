import { PrivateApi } from '..';
import { ICategory } from '../../types/api';

class CategoryApi extends PrivateApi {
  constructor() {
    super('/categories');
  }

  getCategories = async () => await this.get<ICategory[]>('/');
  getAvailableCategories = async () => await this.get<ICategory[]>('/available');
  getCategory = async (id: string) => await this.get<ICategory>('/' + id);
}

export default new CategoryApi();
