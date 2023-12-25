import { Center, Stack, Text, Title } from '@mantine/core';
import { LoginForm } from '../components';

export default function LandingPage() {
  return (
    <Center mih={'100vh'} p={50}>
      <Stack align='center' spacing={60}>
        <Title c='white' ta='center' fz={75} sx={{ textShadow: '2px 2px 12px rgba(0, 0, 0, 0.2)' }}>
          Welcome to
          <Text
            sx={{
              position: 'relative',
              ':before': {
                content: '""',
                height: '5px',
                width: '100%',
                position: 'absolute',
                left: 0,
                bottom: 5,
                backgroundColor: 'violet',
              },
            }}
          >
            Brigada Awards
          </Text>
        </Title>
        <LoginForm />
      </Stack>
    </Center>
  );
}
