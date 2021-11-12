import { PrismaClient } from ".prisma/client"


class Factory {
    #prismaInstance;

    constructor(){
    }
    
    getPrismaInstance() {
        if (this.#prismaInstance == null) {
            this.#prismaInstance = new PrismaClient()
            // Hide the constructor so the returned object can't be new'd...
            this.#prismaInstance.constructor = null
        }
        return this.#prismaInstance;
    }
}

var PrismaFactory = new Factory()
Object.freeze(PrismaFactory)

export default PrismaFactory