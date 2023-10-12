import { Router, json } from "express";
import users from "./user";

const router: Router = Router();

router.use(json());

router.use("/users", users);



export default router;