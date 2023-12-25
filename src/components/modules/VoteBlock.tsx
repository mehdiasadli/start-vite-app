import { ActionIcon, Card, Flex, Stack } from '@mantine/core';
import { ICategory, IUser } from '../../types/api';
import { Grid, NomineeCard, VoteFooter, VoteInfo } from '..';
import { useVoteInfo } from '../../hooks/useVoteInfo';
import { IconX } from '@tabler/icons-react';

export default function VoteBlock({
  category,
  nominees,
}: {
  category: ICategory;
  nominees: IUser[];
}) {
  const { getAvailable, onPointGive, points, onPointRemove, isVoted } = useVoteInfo();

  return (
    <Card>
      <Stack align='center'>
        <VoteInfo />
        <Grid points={[1, 1, 2, 3, 4, 4]}>
          {nominees.map((nominee) => (
            <Flex align='center' gap={5} key={nominee._id}>
              <NomineeCard
                nominee={nominee}
                points={points}
                onPointGive={onPointGive}
                getAvailable={getAvailable}
                onPointRemove={onPointRemove}
              />
              {isVoted(nominee._id) && (
                <ActionIcon
                  color='red'
                  variant='light'
                  onClick={() => {
                    onPointRemove(nominee._id);
                  }}
                >
                  <IconX size={14} />
                </ActionIcon>
              )}
            </Flex>
          ))}
        </Grid>
        <VoteFooter points={points} categoryId={category._id} />
      </Stack>
    </Card>
  );
}
