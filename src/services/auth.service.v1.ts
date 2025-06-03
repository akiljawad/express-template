import {GrantAccessDto} from "../dtos";

export const authServiceV1 = {
    grantAccessToken: async (data: GrantAccessDto): Promise<{ accessToken: string }> => {
        const {clientId, clientSecret} = data;

        return {
            accessToken: 'adfasasd'
        };
    }

};