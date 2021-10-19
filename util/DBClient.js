import { PrismaClient } from ".prisma/client"

var DBClient = (function(){

  var instance
  return {
      getPrismaInstance: function(){
          if (instance == null) {
              instance = new PrismaClient()
              // Hide the constructor so the returned object can't be new'd...
              instance.constructor = null
          }
          return instance;
      }
 }
})()

export default DBClient