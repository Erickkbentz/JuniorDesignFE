import axios from 'axios'
import PrismaFactory from '../../../util/PrismaFactory'

const prisma = PrismaFactory.getPrismaInstance()
const MLAPI = "http://127.0.0.1:9090/analyze_job"


export default async function analyzeJob (req, res) {
    console.log("analze_api req: " + req.body)
    if (req.method === 'POST') {
         const body = JSON.parse(req.body)
         let status = ''
         let outputLocation = ''
         let jobId = body.jobId
        try {

            try {
                const response = await axios.post(MLAPI, {
                    userId: body.userId,
                    inputType: body.inputType,
                    jobName: body.jobName,
                    url: body.url,
                    fileLocation: body.fileLocation
                })

                console.log("MLServer analyze_job API Respnse Code: " + response.status + " -- " + JSON.stringify(response.data))

                status = response.data.status
                console.log(response.data.status)
                outputLocation= response.data.outputLocation

                if (response.status != 200) {
                    status = 'FAILED'
                }
    
            } catch (err) {
                console.log(err.message)
                status = 'FAILED'
            }

            
            console.log("Updating job: " + body.jobName + ", status: " + status)
            await prisma.job.update({
                where: {
                    id: jobId,
                },
                data: {
                    status: status,
                    outputLocation: outputLocation
                }
            })
         res.status(200).json({res: "ok!"})
        } catch (err) {

            console.log(err.message)

            try {
                await prisma.job.update({
                    where: {
                        id: jobId,
                    },
                    data: {
                        status: "FAILED",
                        outputLocation: outputLocation
                    }
                })
            } catch (error) {
                console.log(error.message)
            }
            res.status(500).json({res: ("ERROR: " + err.message)})
        }  
    }
}
