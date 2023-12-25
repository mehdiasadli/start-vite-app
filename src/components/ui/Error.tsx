import { Button, Card, Center, Image, Stack, Title } from '@mantine/core';
import { images } from '../../assets';
import { Link } from 'react-router-dom';

export default function Error({ message = 'Xəta baş verdi' }: { message?: string }) {
  return (
    <Center w='100vw' h='100vh'>
      <Card radius='md' padding={20}>
        <Stack>
          <Title color='red'>{message}</Title>

          <Button variant='light' color='red' radius='xl' component={Link} to='/'>
            Geri Qayıt
          </Button>
        </Stack>
      </Card>

      <Image src={images.bg} height={'100vh'} pos='fixed' sx={{ zIndex: -1 }} />
    </Center>
  );
}
