import {GrantAccessDto} from "../../dtos";

export interface IAuthService {
    grantAccessToken(grantAccessDto: GrantAccessDto): Promise<{ accessToken: string }>;
}