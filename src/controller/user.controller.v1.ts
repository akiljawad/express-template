import {Request, Response} from 'express';
import {successResponse} from "@common/response";
import {userServiceV1} from '@services';
import {CreateUserDto, DeleteUserDto, GetUserDto, UpdateUserDto} from "@dtos";
import {log} from "@config/logger";

export const userControllerV1 = {
    create: async (req: Request, res: Response) => {
        const dto: CreateUserDto = req.body;
        const user = await userServiceV1.createUser(dto);
        return successResponse(res, user);
    },
    findAll: async (req: Request, res: Response) => {
        log.info('Controller --> findAll')
        const users = await userServiceV1.getAllUsers();
        return successResponse(res, users);
    },
    findOne: async (req: Request, res: Response) => {
        const dto: GetUserDto = {
            id: parseInt(req.params.id)
        };
        return successResponse(res, userServiceV1.getUser(dto));
    },
    update: async (req: Request, res: Response) => {
        const dto: UpdateUserDto = {
            ...req.body,
            id: parseInt(req.params.id)
        }
        return successResponse(res, userServiceV1.updateUser(dto));
    },
    remove: async (req: Request, res: Response) => {
        const dto: DeleteUserDto = {
            id: parseInt(req.params.id)
        }
        return successResponse(res, userServiceV1.deleteUser(dto));
    }
}