import {AsyncLocalStorage} from 'async_hooks';

interface RequestContext {
    traceId: string;
    logBuffer: string[];
}

export const requestContext = new AsyncLocalStorage<RequestContext>();

export const log = {
    info: (msg: string) => {
        const context = requestContext.getStore();
        if (context) {
            context.logBuffer.push(`[INFO] [${context.traceId}] ${msg}`);
        } else {
            console.log(`[INFO] [global] ${msg}`);
        }
    },
    error: (msg: string) => {
        const context = requestContext.getStore();
        if (context) {
            context.logBuffer.push(`[ERROR] [${context.traceId}] ${msg}`);
        } else {
            console.error(`[ERROR] [global] ${msg}`);
        }
    },
    debug: (msg: string) => {
        const context = requestContext.getStore();
        if (context) {
            context.logBuffer.push(`[DEBUG] [${context.traceId}] ${msg}`);
        } else {
            console.debug(`[DEBUG] [global] ${msg}`);
        }
    },
};
