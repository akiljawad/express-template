import {Request, Response} from 'express';
import {GrantAccessDto} from "../dtos";
import {successResponse} from "../common/response";
import * as authServiceV1 from '../services';

export const grantAccessToken = async (req: Request, res: Response) => {
    const dto: GrantAccessDto = req.body;
    const token = await authServiceV1.grantAccessToken(dto);
    return successResponse(res, token);
}