import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const prisma = new PrismaClient();

const router = Router();

interface user {
  id: string;
  username: string;
  password: string;
}

router.get("/", async (req: Request, res: Response) => {
  var users: Array<user> = await prisma.user.findMany();
  res.json(users);
});

export default router;
