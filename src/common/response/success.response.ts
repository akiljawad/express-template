import {Messages, StatusCode} from "@common/constants";
import {Response} from 'express';

export const successResponse = <T>(
    res: Response,
    data: T,
    message: string = Messages.REQUEST_SUCCESS,
    code: number = StatusCode.HTTP_200_OK
): Response => {
    return res.status(code).json({
        status: 'success',
        code,
        message,
        data,
    });
};