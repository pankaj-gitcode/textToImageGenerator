import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import dbConnect from './config/db.js';
import userRouter from './router/userRouter.js';
import imageRouter from './router/imageRouter.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.status(200).json({
        success: true,
        message: 'Looks good!...'
    })
})

//call the DB connection function
dbConnect();
// ------------ API ENDPOINTS -------------
// user Router
app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);


app.listen(PORT, ()=>{console.log("SERVER LISTENING ON PORT: ", PORT)});
