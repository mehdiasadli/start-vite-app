import { Button, Card, Flex, Stack, Text } from '@mantine/core';
import { Error, Grid, Loading } from '..';
import { useDeleteVote, useVotes } from '../../api/hooks/vote.hooks';
import { IVote } from '../../types/api';

const convertDate = (dateObj: Date) => {
  const [date, time] = dateObj.toString().split('T');

  const [year, month, day] = date.split('-');
  const [hour, minutes] = time.split(':');

  return `${hour}:${minutes} - ${day}.${month}.${year}`;
};

export default function VotePanel() {
  const { data, isLoading, isError } = useVotes();
  const { mutate, isPending } = useDeleteVote();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  const onDelete = (id: string) => {
    mutate(id);
  };

  return (
    <Grid points={[1, 1, 2, 3, 4, 4]}>
      {data &&
        (data as unknown as IVote<true, true, true, true>[]).map((vote) => (
          <Card withBorder key={vote._id}>
            <Stack>
              <Text fw='bold'>
                {vote.voter.name} - {vote.category.title}
              </Text>
              <Stack spacing={5}>
                {vote.nominees.map((nominee) => (
                  <Text key={nominee.nominee._id}>
                    <strong>{nominee.point}</strong>: {nominee.nominee.name}
                  </Text>
                ))}
              </Stack>

              <Flex align='center' justify='space-between' w='100%'>
                <Text color='gray.6' fs='italic'>
                  {convertDate(vote.createdAt)}
                </Text>
                <Button
                  onClick={() => onDelete(vote._id)}
                  loading={isPending}
                  w={100}
                  color='red'
                  variant='light'
                >
                  Sil
                </Button>
              </Flex>
            </Stack>
          </Card>
        ))}
    </Grid>
  );
}
