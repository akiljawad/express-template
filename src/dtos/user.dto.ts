import {z} from 'zod';

export const CreateUserBodySchema = z.object({
    name: z.string(),
    password: z.string().min(8),
    email: z.string().email(),
})
export type CreateUserDto = z.infer<typeof CreateUserBodySchema>

export const GetUserParamSchema = z.object({
    id: z.number(),
})
export type GetUserDto = z.infer<typeof GetUserParamSchema>

export const UpdateUserBodySchema = CreateUserBodySchema.partial();
export const UpdateUserParamSchema = z.object({
    id: z.number(),
})
const UpdateUserSchema = UpdateUserBodySchema.merge(UpdateUserParamSchema)
export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;

export const DeleteParamSchema = z.object({
    id: z.number(),
})
export type DeleteUserDto = z.infer<typeof DeleteParamSchema>