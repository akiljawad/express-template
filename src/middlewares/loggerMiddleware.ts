import {NextFunction, Request, Response} from 'express';
import {requestContext} from "@config/logger";
import {generateRandomString} from "@common/utils";

export const requestContextMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const context = {
        traceId: generateRandomString(12),
        logBuffer: [],
    };
    const {method, ip, headers, path} = req;

    const userAgent = headers['user-agent'] || 'Unknown';
    const requestTime = Date.now();

    requestContext.run(context, () => {
        res.on('finish', () => {
            const logs = `${context.traceId}: ${method} ${res.statusCode} ${path} ${userAgent} ${ip}: ${
                    Date.now() - requestTime
                }ms\n`
                + context.logBuffer.join('\n');
            console.log(logs)
        });
        next();
    });
};
