import { modals } from '@mantine/modals';
import { PopulatedUser } from '../panels/UserPanel';
import { ActionIcon, Card, Flex, Group, Stack, Title } from '@mantine/core';
import { Avatar } from '..';
import { IconEdit, IconInfoCircle, IconTrash } from '@tabler/icons-react';
import UserEditModal from './UserEditModal';
import UserInfoModal from './UserInfoModal';
import { useDeleteUser } from '../../api/hooks/user.hooks';

export default function UserCard({ user }: { user: PopulatedUser }) {
  const { mutate, isPending } = useDeleteUser();

  const openEditModal = () =>
    modals.open({
      title: 'Düzəliş et',
      children: <UserEditModal user={user} />,
    });

  const openInfoModal = () =>
    modals.open({
      fullScreen: true,
      children: <UserInfoModal user={user} />,
    });

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: 'İstifadəçini silmək istədiyinizə əminsinizmi?',

      labels: {
        confirm: 'Sil',
        cancel: 'Ləğv et',
      },

      confirmProps: {
        color: 'red',
        loading: isPending,
      },

      onConfirm() {
        mutate(user._id);
      },
    });

  return (
    <Card radius='md' shadow='md'>
      <Stack>
        <Group>
          <Avatar name={user.name} src={user?.img} quality={200} />
          <Title order={6}>{user.name}</Title>
        </Group>
        <Flex w='100%' gap={10}>
          <ActionIcon
            onClick={() => openInfoModal()}
            sx={{ flex: 1 }}
            color='violet'
            variant='light'
          >
            <IconInfoCircle size={15} />
          </ActionIcon>
          <ActionIcon
            onClick={() => openEditModal()}
            sx={{ flex: 1 }}
            color='orange'
            variant='light'
          >
            <IconEdit size={15} />
          </ActionIcon>
          <ActionIcon onClick={openDeleteModal} sx={{ flex: 1 }} color='red' variant='light'>
            <IconTrash size={15} />
          </ActionIcon>
        </Flex>
      </Stack>
    </Card>
  );
}
