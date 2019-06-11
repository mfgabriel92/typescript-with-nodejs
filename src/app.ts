import * as express from 'express'
import * as cors from 'cors'
import * as mongoose from 'mongoose'

import routes from './routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlwares()
    this.database()
    this.routes()
  }

  private middlwares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    mongoose.connect(process.env.MONGODB_HOST, { useNewUrlParser: true })
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
