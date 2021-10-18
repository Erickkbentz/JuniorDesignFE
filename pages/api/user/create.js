import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function createUser(req, res) {
  if (req.method === 'POST') {
    const { body } = req;
    const user = await prisma.user.create({ data: JSON.parse(body) });
    res.json(user);
  }
}