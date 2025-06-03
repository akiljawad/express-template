import {Request, Response} from 'express';
import {successResponse} from "../common/response";
import {userServiceV1} from '../services';
import {CreateUserDto} from "../dtos";

export const userControllerV1 = {
    create: async (req: Request, res: Response) => {
        const dto: CreateUserDto = req.body;
        const token = await userServiceV1.createUser(dto);
        return successResponse(res, token);
    },
    findAll: async (req: Request, res: Response) => {
        return successResponse(res, 'findAll');
    },
    findOne: async (req: Request, res: Response) => {
        return successResponse(res, 'findOne');
    },
    update: async (req: Request, res: Response) => {
        return successResponse(res, 'update');
    },
    remove: async (req: Request, res: Response) => {
        return successResponse(res, 'remove');
    }
}