import { TypeOf, z } from 'zod';

export const LoginSchema = z.object({
  username: z
    .string({
      invalid_type_error: 'İstifadəçi adı tekst formatında olmalıdır',
      required_error: 'İstifadəçi adı boş buraxılmamalıdır',
    })
    .regex(
      /^[a-zA-Z0-9]{3,}$/,
      'İstifadəçi adında yanlız ingilis hərfləri və rəqəmlər yer ala bilər'
    )
    .min(3, 'İstifadəçi adı minimum 3 simvol olmalıdır'),
  password: z
    .string({
      invalid_type_error: 'Şifrə tekst formatında olmalıdır',
      required_error: 'Şifrə boş buraxılmamalıdır',
    })
    .regex(/^[a-zA-Z0-9]{3,}$/, 'Şifrədə yanlız ingilis hərfləri və rəqəmlər yer ala bilər'),
});

export type LoginSchemaType = TypeOf<typeof LoginSchema>;
