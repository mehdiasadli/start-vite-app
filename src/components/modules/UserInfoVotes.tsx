/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react';
import { useVotes } from '../../api/hooks/vote.hooks';
import { IUser } from '../../types/api';
import { Accordion, Card, Flex, Group, Text, Title } from '@mantine/core';
import { Avatar } from '..';

export default function UserInfoVotes({ user }: { user: IUser<true, true, true, true> }) {
  const { data: votes } = useVotes();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (votes) {
      setData(
        votes
          .filter((vote) => vote.nominees.find((v) => v.nominee._id === user._id))
          .map((vote) => ({
            // @ts-ignore
            category: vote.category.title,
            // @ts-ignore
            voterName: vote.voter.name,
            // @ts-ignore
            voterImg: vote.voter.img,
            // @ts-ignore
            voterId: vote.voter._id,
            point: vote.nominees.find((n) => n.nominee._id === user._id)?.point,
          }))
          .reduce((obj: any, value) => {
            if (!obj[value.category]) {
              obj[value.category] = [];
            }

            obj[value.category].push({
              point: value.point,
              voter: { _id: value.voterId, name: value.voterName, img: value.voterImg },
            });

            return obj;
          }, {}) as any
      ) as any;
    }
  }, [user._id, votes]);

  console.log(data && Object.entries(data));

  return !data || !Object.entries(data).length ? (
    'No data'
  ) : (
    <Accordion variant='contained' chevronPosition='left'>
      {Object.entries(data).map(([category, value]: [string, any]) => (
        <Accordion.Item key={category} value={category}>
          <Accordion.Control>
            <Flex align='center' justify='space-between'>
              <Title order={5}>{category}</Title>
              <Title order={6}>
                {value.reduce((sum: number, { point }: { point: number }) => sum + point, 0)}
              </Title>
            </Flex>
          </Accordion.Control>
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
              {value.map(
                ({
                  voter,
                  point,
                }: {
                  voter: { _id: string; name: string; img: string };
                  point: number;
                }) => (
                  <Card
                    key={voter._id}
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
                        <Avatar name={voter.name} src={voter.img} quality={200} />
                        <Text
                          sx={(theme) => ({
                            [theme.fn.smallerThan('sm')]: { fontSize: 14 },
                            [theme.fn.largerThan('sm')]: {
                              fontSize: voter.name.length > 15 ? 12 : 14,
                            },
                          })}
                        >
                          {voter.name}
                        </Text>
                      </Group>
                      <Text>{point}</Text>
                    </Flex>
                  </Card>
                )
              )}
            </Flex>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
