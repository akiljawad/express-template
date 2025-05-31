import {Messages, StatusCode} from "../constants";
import {Response} from 'express';

export const successResponse = <T>(
    res: Response,
    data: T,
    message: string = Messages.REQUEST_SUCCESS,
    code: number = StatusCode.HTTP_200_OK
): Response => {
    return res.status(code).json({
        code,
        message,
        data,
    });
};