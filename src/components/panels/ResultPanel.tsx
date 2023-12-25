import { useData } from '../../api/hooks/vote.hooks';

export default function ResultPanel() {
  const { data } = useData();

  console.log(data);
  return <div>{data ? JSON.stringify(data) : 'loading'}</div>;
}
