import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes'
dotenv.config()

const app = express();

//middleware
app.use(express.json())

//routes
app.use('/api/tasks', routes)

const URI = process.env.URI
const PORT = process.env.PORT


mongoose.connect(URI as string)
.then(()=>{
  app.listen(PORT)
  console.log('db connected')  
})
.catch((err)=> console.log(err))

