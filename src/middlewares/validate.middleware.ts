import {NextFunction, Request, Response} from 'express';
import {ZodSchema} from 'zod';
import {UnprocessableError} from '../common/errors'

export const validateSchema =
    (schema: ZodSchema<any>, source: 'body' | 'params' | 'query' = 'body') =>
        (req: Request, res: Response, next: NextFunction) => {
            const data = req[source];

            if ((source === 'body' || source === 'query') && (!data || Object.keys(data).length === 0)) {
                return next(new UnprocessableError(`${source} is required and cannot be empty`));
            }

            const result = schema.safeParse(req[source]);
            if (!result.success) {
                return next(new UnprocessableError(result.error.message));
            }

            req[source] = result.data;
            next();
        };
