import express from 'express';
import {validateSchema} from "../../middlewares";
import {GrantAccessSchema} from "../../dtos/auth-dto";

const router = express.Router();

router.post("/accessToken", validateSchema(GrantAccessSchema, 'body'),)

export default router;