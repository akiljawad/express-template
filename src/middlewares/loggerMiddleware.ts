import {NextFunction, Request, Response} from 'express';
import {requestContext} from "@config/logger";
import {v4 as uuidv4} from "uuid";

export const requestContextMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const context = {
        traceId: uuidv4(),
        logBuffer: [],
    };

    requestContext.run(context, () => {
        res.on('finish', () => {
            const logs = context.logBuffer.join('\n');
            console.log(`\n🧾 Logs for request ${context.traceId}:\n${logs}`);
        });
        next();
    });
};
