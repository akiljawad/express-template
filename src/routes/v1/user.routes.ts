import express from 'express';
import {asyncHandler, validateSchema} from "@middlewares";
import {userControllerV1} from "@controller";
import {CreateUserSchema} from "@dtos";

const router = express.Router();

router.post("/", validateSchema(CreateUserSchema, 'body'), asyncHandler(userControllerV1.create))
    .get("/", asyncHandler(userControllerV1.findAll))
    .get("/:id", asyncHandler(userControllerV1.findOne))
    .put("/:id", asyncHandler(userControllerV1.update))
    .delete("/:id", asyncHandler(userControllerV1.remove))

export default router;