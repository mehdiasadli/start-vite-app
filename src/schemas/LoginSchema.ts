import { TypeOf, z } from 'zod';

export const LoginSchema = z.object({
  username: z.string({
    invalid_type_error: 'Username must be a string',
    required_error: 'Username is required',
  }),
  password: z.string({
    invalid_type_error: 'Password must be a string',
    required_error: 'Password is required',
  }),
});

export type LoginSchemaType = TypeOf<typeof LoginSchema>;
