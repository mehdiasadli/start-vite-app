import { useData } from '../../api/hooks/vote.hooks';

export default function StatPanel() {
  const { data } = useData();

  console.log(data);
  return <pre>{data ? JSON.stringify(data, null, 2) : 'loading'}</pre>;
}
