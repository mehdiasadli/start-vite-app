import { Button, Flex } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useVote } from '../../api/hooks/vote.hooks';
import { PointInfo } from '../../types/vote-info';

export default function VoteFooter({
  points,
  categoryId,
}: {
  points: PointInfo[];
  categoryId: string;
}) {
  const navigate = useNavigate();
  const { mutate, isPending } = useVote();

  const onSave = () => {
    mutate({ categoryId, nominees: points.map((p) => ({ nominee: p._id, point: p.point })) });
  };

  return (
    <Flex gap={10} justify='space-between' align='center' w='100%' px={20} mt={20} wrap={'wrap'}>
      <Button radius='xl' onClick={() => navigate(-1)} color='pink' ml='auto' variant='light'>
        Geri
      </Button>
      <Button
        loading={isPending}
        variant='subtle'
        radius='xl'
        disabled={points.length !== 3}
        onClick={onSave}
        color='violet'
      >
        Yadda saxla
      </Button>
    </Flex>
  );
}
