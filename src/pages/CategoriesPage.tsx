import { Center, Stack, Title } from '@mantine/core';
import { CategoriesList } from '../components';

export default function CategoriesPage() {
  return (
    <Center>
      <Stack align='center'>
        <Title
          c='white'
          ta='center'
          fz={75}
          sx={{ textShadow: '2px 2px 12px rgba(0, 0, 0, 0.1)' }}
          mb={10}
        >
          Kateqoriya Seçin
        </Title>
        <CategoriesList />
      </Stack>
    </Center>
  );
}
