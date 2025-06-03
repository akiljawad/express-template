import {CreateUserDto} from "../dtos";

export const userServiceV1 = {
    createUser: async (data: CreateUserDto): Promise<{ accessToken: string }> => {
        const {username, password, email} = data;

        return {
            accessToken: 'adfasasd'
        };
    }
}