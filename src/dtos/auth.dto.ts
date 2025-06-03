import {z} from 'zod';

export const GrantAccessSchema = z.object({
    clientId: z.string(),
    clientSecret: z.string(),
})

export type GrantAccessDto = z.infer<typeof GrantAccessSchema>