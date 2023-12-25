import { Blockquote, Card, Center, Stack, Title } from '@mantine/core';
import { Error, Loading, VoteBlock } from '../components';
import { useParams } from 'react-router-dom';
import { useCategory } from '../api/hooks/category.hooks';
import { useNominees } from '../api/hooks/user.hooks';

export default function VotingPage() {
  const { id } = useParams() as { id: string };

  const { data: category, isLoading: isCategoryLoading } = useCategory(id);
  const { data: nominees, isLoading: isNomineesLoading } = useNominees();

  if (isCategoryLoading || isNomineesLoading) {
    return <Loading />;
  }

  if (!category || !nominees) {
    return <Error />;
  }

  return (
    <Center>
      <Stack p={25}>
        <Title c='white' ta='center' fz={50} sx={{ textShadow: '2px 2px 12px rgba(0, 0, 0, 0.1)' }}>
          {category.title}
        </Title>
        <Card bg='white' p={0}>
          <Blockquote>{category.desc}</Blockquote>
        </Card>
        <VoteBlock category={category} nominees={nominees} />
      </Stack>
    </Center>
  );
}
