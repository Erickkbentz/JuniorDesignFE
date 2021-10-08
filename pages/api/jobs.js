import { PrismaClient } from '@prisma/client';
import { getData } from "../../helper";

const prisma = new PrismaClient();

export default async function (req, res) {
//   if (req.method === 'POST') {
//     const { body } = req;
//     const job = await prisma.job.create({ data: JSON.parse(body) });
//     res.json(job);
    getData()
    .then(response => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'max-age=180000');
    res.end(JSON.stringify(response))
    })
    .catch(error => {
    res.json(error);
    next();
});
//   }
}