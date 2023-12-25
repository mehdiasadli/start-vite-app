import { useFetch } from '../../hooks/useFetch';
import categoryService from '../services/category.service';

export const useCategories = () => {
  return useFetch(['categories'], categoryService.getCategories);
};

export const useAvailableCategories = () => {
  return useFetch(['a-categories'], categoryService.getAvailableCategories);
};

export const useCategory = (id: string) => {
  return useFetch(['categories', id], () => categoryService.getCategory(id));
};
