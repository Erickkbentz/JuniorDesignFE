import axios from 'axios'
import { alert, console } from 'globalthis/implementation'
import {serializeError} from 'serialize-error'
import PrismaFactory from '../../../util/PrismaFactory'

const prisma = PrismaFactory.getPrismaInstance()
const MLAPI = "http://127.0.0.1:9090/analyze_job"


export default async function createJob(req, res) {

  if (req.method === 'POST') {
    const body = JSON.parse(req.body)
    console.log("Trying to add Job to Prisma")

    try {

      // checks type of file input and sets to data field inputType
      let inputType;
      let fileLocation = body.fileLocation;
      let  url = body.url;        
      let d = new Date()
      let currentTime = d.toLocaleString()
      
      if (body.url) {
        inputType = "URL";
      
      } else if (body.fileLocation) {
        inputType = "CSV";

      }

      let status = "IN PROGRESS";

      // we have to figure out how to make this dynamic so every user has unique id
      let userId = 1;

      // outputLocation should be empty on creation. Given in response from MLAPI and updated afterwards
      //var outputLocation = `/UserFiles/${id}/output/${body.jobName}/${body.fileLocation}`

      // TODO: figure out how to pass actual file from form to this api
      // we need to store that file at /UserFiles/..... & save that location for fileLocation attribute

      const job = await prisma.job.create({ 
        data: {
          inputType: inputType,
          // given from form
          jobName: body.jobName,
          // given from CreateJobForm.js
          createTime: currentTime,
          status: status,
          // given from form
          fileLocation: fileLocation,
          // given from form
          url: url,
          outputLocation: "",
          author :{
            connect: {id: userId},
          }
        }
      })
      console.log("Created Job: ", job)

      // without await so function runs in background incase ML stuff takes too long
      console.log("Initiating analysis of job in MLServer")
      analyzeJob(userId, job.id, inputType, body.jobName, fileLocation, url)

      res.status(201).json(job)
    } catch (err) {
      console.log("Failed to create Job with error: ", err.message)
      console.log(JSON.stringify(serializeError(err)))
      
      res.status(400).json(JSON.stringify(serializeError(err)))
    }
  }
}

const analyzeJob = async (userId, jobId, inputType, jobName, fileLocation, url) => {
  
  try{ 
    const res = await fetch('http://localhost:3000/api/job/analyze', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        jobId: jobId,
        inputType: inputType,
        jobName: jobName,
        fileLocation: fileLocation,
        url: url
      })
    })

    if(res.status != 200) {
      throw new Error("analyze_job returned non 200 status code. MLServer is down or API failed")
    }

  } catch (err) {
      console.log("Failed to initialize ML analysis: \n" + err)
      
      console.log("Trying to set job with id: " + jobId + " to status: FAILED")

      try {
        await prisma.job.update({
          where: {
              id: jobId,
          },
          data: {
              status: "FAILED",
              outputLocation: ''
          }
        })

        console.log("Successfully updated job with id: " + jobId + " to status: FAILED")
    } catch(error) {
      console.log(error.message)
    }

  }
}
