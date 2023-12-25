import { useForm, zodResolver } from '@mantine/form';
import { useUpdateUser } from '../../api/hooks/user.hooks';
import { PopulatedUser } from '../panels/UserPanel';
import { UserEditSchema, UserEditSchemaType } from '../../schemas/UserEditSchema';
import { Button, Stack, TextInput } from '@mantine/core';

export default function UserEditModal({ user }: { user: PopulatedUser }) {
  const { mutate, isPending } = useUpdateUser();

  const form = useForm({
    initialValues: {
      name: user.name,
      img: user?.img || '',
    },
    validate: zodResolver(UserEditSchema),
  });

  const onSuccess = (values: UserEditSchemaType) => {
    mutate({ id: user._id, data: values });
  };

  return (
    <form onSubmit={form.onSubmit(onSuccess)}>
      <Stack>
        <TextInput label='Ad' placeholder='Ad' {...form.getInputProps('name')} />
        <TextInput label='Şəkil' placeholder='Şəkil' {...form.getInputProps('img')} />

        <Button type='submit' loading={isPending}>
          Təsdiqlə
        </Button>
      </Stack>
    </form>
  );
}
