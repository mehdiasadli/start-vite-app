import { useForm, zodResolver } from '@mantine/form';
import { LoginSchema } from '../../schemas/LoginSchema';
import { useSignin } from '../../api/hooks/auth.hooks';
import { Button, PasswordInput, Stack, TextInput } from '@mantine/core';

export default function LoginForm() {
  const { mutate, isPending } = useSignin();
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: zodResolver(LoginSchema),
  });

  const onSuccess = (values: { username: string; password: string }) => {
    mutate(values);
  };

  return (
    <form onSubmit={form.onSubmit(onSuccess)}>
      <Stack align='center'>
        <TextInput
          placeholder='İstifadəçi adı'
          sx={{ width: 350 }}
          styles={{
            input: { height: 50, paddingLeft: 20 },
          }}
          radius={'xl'}
          {...form.getInputProps('username')}
        />
        <PasswordInput
          placeholder='Şifrə'
          sx={{ width: 350 }}
          styles={{
            input: { height: 50, paddingInline: 20 },
            innerInput: { height: 50, paddingInline: 20 },
          }}
          radius={'xl'}
          {...form.getInputProps('password')}
        />

        <Button
          type='submit'
          loading={isPending}
          variant='light'
          color='violet'
          h={60}
          w={300}
          radius='xl'
          fz={20}
        >
          Daxil Ol
        </Button>
      </Stack>
    </form>
  );
}
