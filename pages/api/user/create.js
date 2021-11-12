import PrismaFactory from "../../../util/PrismaFactory";

const prisma = PrismaFactory.getPrismaInstance()

export default async function createUser(req, res) {
  if (req.method === 'POST') {
    const { body } = req;
    const user = await prisma.user.create({ data: JSON.parse(body) });
    res.status(200).json(user);
  }
}