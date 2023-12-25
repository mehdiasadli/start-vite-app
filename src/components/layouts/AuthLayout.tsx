import { Image } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { images } from '../../assets';

export default function AuthLayout() {
  return (
    <>
      <Image src={images.bg} height={'100vh'} pos='fixed' sx={{ zIndex: -1 }} />

      <Outlet />
    </>
  );
}
