import express from 'express';
import {validateSchema} from "../../middlewares";
import {GrantAccessSchema} from "../../dtos";
import {asyncHandler} from "../../common/utils";
import * as authControllerV1 from "../../controller";

const router = express.Router();

router.get("/access-token", validateSchema(GrantAccessSchema, 'body'), asyncHandler(authControllerV1.grantAccessToken))

export default router;