import { console } from 'globalthis/implementation'
import {serializeError} from 'serialize-error'
import PrismaFactory from '../../../util/PrismaFactory'

const prisma = PrismaFactory.getPrismaInstance()

export default async function createJob(req, res) {
  if (req.method === 'POST') {
    var body = JSON.parse(req.body)  
    console.log("Trying to add Job to Prisma")
    // var urlInput = body.urlInput;
    // var csvFile = body.csvFile;
    // console.log(urlInput);
    // console.log(csvFile);

    try {
      console.log(data.jobName);
      // if (jobType)
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
      res.status(200).json(job)
      console.log("Created Job: ", job)
    } catch (err) {
      console.log("Failed to create Job with error: ", err.message)
      console.log(JSON.stringify(serializeError(err)))
      
      res.status(400).json(JSON.stringify(serializeError(err)))
    }
  }
}