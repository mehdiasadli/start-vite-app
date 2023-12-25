/* eslint-disable @typescript-eslint/ban-ts-comment */
import { modals } from '@mantine/modals';
import { useDeleteVote } from '../../api/hooks/vote.hooks';
import { IUser } from '../../types/api';
import { Accordion, ActionIcon, Card, Flex, Group, Stack, Text } from '@mantine/core';
import { Avatar } from '..';
import { IconTrash } from '@tabler/icons-react';

export default function UserInfoVoted({ user }: { user: IUser<true, true, true, true> }) {
  const { mutate, isPending } = useDeleteVote();

  const openDeleteVoteModal = (id: string) =>
    modals.openConfirmModal({
      title: 'Are you sure to delete?',

      labels: {
        confirm: 'Delete',
        cancel: 'Cancel',
      },

      confirmProps: {
        color: 'red',
        loading: isPending,
      },

      onConfirm() {
        mutate(id);
        modals.closeAll();
      },
    });
  return user.votes?.length ? (
    <Stack>
      <Accordion variant='contained'>
        {user.votes.map((v) => (
          <Accordion.Item key={v._id} value={v._id}>
            <Accordion.Control>{v.category.title}</Accordion.Control>
            <Accordion.Panel>
              <Flex
                gap={10}
                align='center'
                sx={(theme) => ({
                  [theme.fn.smallerThan('sm')]: {
                    flexDirection: 'column',
                  },
                })}
              >
                {v.nominees
                  .sort((n1, n2) => n2.point - n1.point)
                  .map((nominee) => {
                    // @ts-ignore
                    const name = nominee.nominee.name;
                    // @ts-ignore
                    const img = nominee.nominee?.img;
                    return (
                      <Card
                        key={nominee.nominee._id}
                        pl={10}
                        pr={15}
                        py={5}
                        radius='xl'
                        shadow='xs'
                        sx={(theme) => ({
                          flex: 1,
                          [theme.fn.smallerThan('sm')]: {
                            width: '100%',
                          },
                        })}
                      >
                        <Flex align='center' justify='space-between'>
                          <Group spacing={10}>
                            <Avatar name={name} src={img} quality={200} />
                            <Text
                              sx={(theme) => ({
                                [theme.fn.smallerThan('sm')]: { fontSize: 14 },
                                [theme.fn.largerThan('sm')]: {
                                  fontSize: name.length > 15 ? 12 : 14,
                                },
                              })}
                            >
                              {name}
                            </Text>
                          </Group>
                          <Text>{nominee.point}</Text>
                        </Flex>
                      </Card>
                    );
                  })}
                <ActionIcon
                  ml='auto'
                  onClick={() => openDeleteVoteModal(v._id)}
                  color='red'
                  variant='filled'
                  h={40}
                  w={40}
                  sx={(theme) => ({
                    [theme.fn.smallerThan('sm')]: {
                      width: '100%',
                    },
                  })}
                >
                  <IconTrash size={14} />
                </ActionIcon>
              </Flex>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Stack>
  ) : null;
}
