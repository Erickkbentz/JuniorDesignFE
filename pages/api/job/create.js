import {serializeError} from 'serialize-error'
import PrismaFactory from '../../../util/PrismaFactory'

const prisma = PrismaFactory.getPrismaInstance()

const mlAnalyzeAPI = "http://127.0.0.1:9090/analyze_job"

export default async function createJob(req, res) {
  if (req.method === 'POST') {
    try {
      let body = JSON.parse(req.body)
      console.log("Trying to add Job to Prisma")

      let jobName = body.jobName
      let d = new Date()
      let currentTime = d.toLocaleString
      let status = "IN_PROGRESS"
      // empty until respnse from MLServer
      let outputLocation = ""

      // add logic to save user file on server in UserFiles directory outside of repo
      // save that location here
      let inputLocation = ""

      const job = await prisma.job.create({ 
        data: {
          jobName: jobName,
          createTime: currentTime,
          status: status,
          inputLocation: inputLocation,
          outputLocation: outputLocation,
          author :{
            connect: {id: 1},
          }
        }
      })

      //////////

      try {
        console.log("Calling api: " + mlAnalyzeAPI)
        const mlResponse = await fetch(mlAnalyzeAPI, {
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify({
            'jobName': body.jobName
          })
        })

        let mlRes = await mlResponse.json()

        // parse response and get output location
        let outputLocation = ""
        console.log(mlRes)
        status = "COMPLETED"
      } catch (error) {
        status = "FAILED"
        alert("ML Server Error: " + error.message)
        console.log("ERROR: ", error.message)
      }
      
      
      const jobUpdate = await prisma.job.update({ 
        where: {
          jobName : jobName
        },
        data: {
          status: status,
          outputLocation: outputLocation,
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