import mongoose from 'mongoose'
import 'dotenv/config'

const dbConnect = async()=>{
    try{
        await mongoose.connect(`${process.env.DB_URI}/texttoimage`)
    .then(()=>console.log("DB CONNECTED!..."))
    }
    catch(err){
        console.error(`ERROR in db connection: ${err.message}`)
    }
}

export default dbConnect;