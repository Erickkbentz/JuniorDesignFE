import { PrismaClient } from '@prisma/client'

class DBClient {
  prisma

  constructor() {
    this.prisma = new PrismaClient()
    console.log("Prisma Client created")
  }

}

export let dbClient = new DBClient()
