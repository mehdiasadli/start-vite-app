import { Box, Tabs } from '@mantine/core';
import { useState } from 'react';
import { CategoryPanel, StatPanel, UserPanel, VotePanel } from '..';

type TabItem = 'users' | 'votes' | 'categories' | 'stats' | 'results';

export default function Sidebar() {
  const [tab, setTab] = useState<TabItem>('users');

  return (
    <Tabs value={tab} onTabChange={(value) => setTab(value as TabItem)} color='violet'>
      <Tabs.List grow>
        <Tabs.Tab value='users'>Users</Tabs.Tab>
        <Tabs.Tab value='votes'>Votes</Tabs.Tab>
        <Tabs.Tab value='stats'>Stats</Tabs.Tab>
        <Tabs.Tab value='categories'>Categories</Tabs.Tab>
      </Tabs.List>
      <Box py={20}>
        <Tabs.Panel value='users'>
          <UserPanel />
        </Tabs.Panel>
        <Tabs.Panel value='votes'>
          <VotePanel />
        </Tabs.Panel>
        <Tabs.Panel value='stats'>
          <StatPanel />
        </Tabs.Panel>
        <Tabs.Panel value='categories'>
          <CategoryPanel />
        </Tabs.Panel>
      </Box>
    </Tabs>
  );
}
