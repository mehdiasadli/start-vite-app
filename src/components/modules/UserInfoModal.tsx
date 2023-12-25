import { PopulatedUser } from '../panels/UserPanel';
import { Box, Card, Group, Stack, Tabs } from '@mantine/core';
import { UserInfoVoted, UserInfoVotes } from '..';
import { useState } from 'react';

export default function UserInfoModal({ user }: { user: PopulatedUser }) {
  const [tab, setTab] = useState('voted');

  return (
    <Stack>
      <Group grow>
        <Card shadow='sm' withBorder py={10} ta='center'>
          {user.name}
        </Card>
        <Card shadow='sm' withBorder py={10} ta='center'>
          {user.username}
        </Card>
        <Card shadow='sm' withBorder py={10} ta='center'>
          {user.password}
        </Card>
      </Group>
      <Tabs value={tab} onTabChange={(value) => setTab(value as string)} color='violet'>
        <Tabs.List grow>
          <Tabs.Tab value='voted'>Verdiyi səslər</Tabs.Tab>
          <Tabs.Tab value='votes'>Aldığı səslər</Tabs.Tab>
        </Tabs.List>

        <Box p={20}>
          <Tabs.Panel value='voted'>
            <UserInfoVoted user={user} />
          </Tabs.Panel>
          <Tabs.Panel value='votes'>
            <UserInfoVotes user={user} />
          </Tabs.Panel>
        </Box>
      </Tabs>
    </Stack>
  );
}
