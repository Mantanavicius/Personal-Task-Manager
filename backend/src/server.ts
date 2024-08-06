import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/routes'

const app = express();

//middleware
app.use(cors())
app.use(express.json())

const dbURI = "mongodb+srv://mantanavicius:PwvHP9zq42gGXaKE@cluster0.iisjwpx.mongodb.net/task-buddy"

mongoose.connect(dbURI)
.then((result)=>{
  app.listen(3000)
  console.log('db connected')  
})
.catch((err)=> console.log(err))


//routes
app.use(routes)