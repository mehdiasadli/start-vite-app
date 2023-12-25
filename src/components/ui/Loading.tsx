import { Center, Image, Loader } from '@mantine/core';
import { images } from '../../assets';

export default function Loading() {
  return (
    <Center pos='fixed' top={0} left={0} w='100vw' h='100vh'>
      <Image src={images.bg} height={'100vh'} pos='fixed' top={0} left={0} sx={{ zIndex: -1 }} />

      <Loader variant='bars' color='white' size='xl' />
    </Center>
  );
}
