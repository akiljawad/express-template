import {z} from 'zod';

export const CreateUserSchema = z.object({
    username: z.string(),
    password: z.string().min(8),
    email: z.string().email(),
})

export type CreateUserDto = z.infer<typeof CreateUserSchema>