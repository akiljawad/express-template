import {Messages, StatusCode} from "@common/constants";
import {HttpError} from "@common/errors/http.error";

export class BadRequestError extends HttpError {
    constructor(message: string = Messages.BAD_REQUEST_ERROR) {
        super(StatusCode.HTTP_400_BAD_REQUEST, message);
    }
}