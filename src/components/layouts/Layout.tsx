import { Box, Image } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { images } from '../../assets';
import { Navbar } from '..';

export default function Layout() {
  const NAVBAR_HEIGHT = 60;

  return (
    <>
      <Image src={images.bg} height={'100vh'} pos='fixed' sx={{ zIndex: -1 }} />
      <Navbar height={NAVBAR_HEIGHT} />
      <Box py={50} px={10}>
        <Outlet />
      </Box>
    </>
  );
}
