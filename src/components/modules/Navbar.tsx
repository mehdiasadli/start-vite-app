import { Button, Flex, Group } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { useLogout } from '../../api/hooks/auth.hooks';
import { useAuth } from '../../store/auth.store';

export default function Navbar({ height }: { height: number }) {
  const { user } = useAuth();
  const logout = useLogout();
  const { pathname } = useLocation();

  return (
    <Flex w='100vw' h={height} align='center' justify='flex-end' px={40} py={10}>
      <Group h='100%'>
        {user?.isAdmin && (
          <Button
            component={Link}
            to={pathname.includes('dashboard') ? '/categories' : '/dashboard'}
            variant='light'
            radius='xl'
            color='violet'
          >
            {pathname.includes('dashboard') ? 'Categories' : 'Dashboard'}
          </Button>
        )}
        <Button onClick={() => logout()} variant='light' radius='xl' color='red'>
          Çıxış Et
        </Button>
      </Group>
    </Flex>
  );
}
