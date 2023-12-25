import { TypeOf, z } from 'zod';

export const UserEditSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'İstifadəçi adı tekst formatında olmalıdır',
    })
    .optional(),
  img: z.optional(
    z.string({
      invalid_type_error: 'İstifadəçi adı tekst formatında olmalıdır',
    })
  ),
});

export type UserEditSchemaType = TypeOf<typeof UserEditSchema>;
