import { Title } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <>
      <Title>Auth Layout</Title>
      <Outlet />
    </>
  );
}
