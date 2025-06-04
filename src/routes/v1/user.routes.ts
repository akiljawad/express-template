import express from 'express';
import {asyncHandler, validateSchema} from "@middlewares";
import {userControllerV1} from "@controller";
import {
    CreateUserBodySchema,
    DeleteParamSchema,
    GetUserParamSchema,
    UpdateUserBodySchema,
    UpdateUserParamSchema
} from "@dtos";

const router = express.Router();

router.post("/", validateSchema(CreateUserBodySchema, 'body'), asyncHandler(userControllerV1.create))
    .get("/", asyncHandler(userControllerV1.findAll))
    .get("/:id", validateSchema(GetUserParamSchema, 'params'), asyncHandler(userControllerV1.findOne))
    .put("/:id", validateSchema(UpdateUserParamSchema, 'params'), validateSchema(UpdateUserBodySchema, 'body'), asyncHandler(userControllerV1.update))
    .delete("/:id", validateSchema(DeleteParamSchema, 'params'), asyncHandler(userControllerV1.remove))

export default router;