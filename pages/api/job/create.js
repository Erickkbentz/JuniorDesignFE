import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function createJob(req, res) {
  if (req.method === 'POST') {
    var body = JSON.parse(req.body)  
    console.log("Trying to add Job to Prisma")

    const job = await prisma.job.create({ 
      data: {
        jobName: body.jobName,
        createTime: body.createTime,
        status: body.status,
        inputLocation: body.inputLocation,
        outputLocation: body.outputLocation,
        author :{
          connect: {id: 1},
        }
      }
    })
    res.json(job)
    console.log("Created Job: ", job)
  }
}