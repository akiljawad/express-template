import express from 'express';
import {asyncHandler, validateSchema} from "@middlewares";
import {GrantAccessSchema} from "@dtos";
import {authControllerV1} from "@controller";

const router = express.Router();

router.get("/access-token", validateSchema(GrantAccessSchema, 'body'), asyncHandler(authControllerV1.grantAccessToken))
    .get("/verify-token", asyncHandler(authControllerV1.verifyAccessToken))

export default router;