import { Title } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export default function PrivateLayout() {
  return (
    <>
      <Title>Private Layout</Title>
      {/* NAVBAR */}
      <Outlet />
    </>
  );
}
