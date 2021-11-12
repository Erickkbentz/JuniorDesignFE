import { alert, console } from 'globalthis/implementation'
import {serializeError} from 'serialize-error'
import PrismaFactory from '../../../util/PrismaFactory'

const prisma = PrismaFactory.getPrismaInstance()

export default async function createJob(req, res) {

  if (req.method === 'POST') {
    var body = JSON.parse(req.body)
    console.log("Trying to add Job to Prisma")

    try {

      // checks type of file input and sets to data field inputType
      var inputType;
      if (body.url) {
        inputType = "URL";
      } else if (body.fileLocation) {
        inputType = "CSV";
      }

      var status = "IN PROGRESS";

      var id = 1;
      var outputLocation = `/UserFiles/${id}/output/${body.jobName}/${body.fileLocation}`

      const job = await prisma.job.create({ 
        data: {
          inputType: inputType,
          // given from form
          jobName: body.jobName,
          // given from CreateJobForm.js
          createTime: body.createTime,
          status: status,
          // given from form
          fileLocation: body.fileLocation,
          // given from form
          url: body.url,
          outputLocation: outputLocation,
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
      console.log("Created Job: ", job)
      
      res.status(400).json(JSON.stringify(serializeError(err)))
    }
  }
}