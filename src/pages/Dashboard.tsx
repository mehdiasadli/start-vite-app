import { Container } from '@mantine/core';
import { Sidebar } from '../components';

export default function Dashboard() {
  return (
    <Container size='full' bg='white' sx={{ borderRadius: 5 }} p={10}>
      <Sidebar />
    </Container>
  );
}
