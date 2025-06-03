import {NextFunction, Request, Response} from 'express';
import {HttpError} from "../common/errors";
import {Messages} from "../common/constants";
import {env} from "../config";

export const errorHandler =
    (err: Error, req: Request, res: Response, next: NextFunction): void => {
        const statusCode = err instanceof HttpError ? err.status : 500;
        const message = err.message || Messages.INTERNAL_ERROR;

        res.status(statusCode).json({
            error: {
                status: 'failed',
                code: statusCode,
                reason: err.name,
                message: env.NODE_ENV === 'production' ? Messages.REQUEST_ERROR_PROD : message,
                ...(env.NODE_ENV !== 'production' && {stack: err.stack})
            }
        })
    };