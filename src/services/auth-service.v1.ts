import {GrantAccessDto} from "../dtos";

export const grantAccessToken = async (data: GrantAccessDto): Promise<{ accessToken: string }> => {
    const {clientId, clientSecret} = data;

    return {
        accessToken: 'adfasasd'
    };
};