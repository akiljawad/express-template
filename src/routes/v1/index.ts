import express from 'express';
import authRouter from "@routes/v1/auth.routes";
import userRouter from "@routes/v1/user.routes";

const router = express.Router();

router.use("/auth", authRouter)
router.use("/user", userRouter)

export default router;