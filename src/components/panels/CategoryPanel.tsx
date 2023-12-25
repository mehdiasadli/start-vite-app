import { useCategories } from '../../api/hooks/category.hooks';

export default function CategoryPanel() {
  const { data } = useCategories();

  console.log(data);
  return <div>CategoryPanel</div>;
}
