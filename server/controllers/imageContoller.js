import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from 'form-data'
import {Buffer} from 'buffer'

export const imageController= async(req,res)=>{
    try{

    const {userId, prompt} = req.body;

    // find userId in DB
    const user = await userModel.findById(userId);

    // if data missing
    if(!userId || !prompt){
        return res.status(400).json({success:false, message: 'Missing Data...'});
    }

    // no credit
    if(user.creditBalance === 0 || user.creditBalance < 0){
        return res.status(404).json({success: false, message:'No Credit...'})
    }

    // declare formData
    const formData = new FormData();
    formData.append('prompt', prompt);
    const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1',
        formData,
        {
            headers: {'x-api-key': process.env.CLIPDROP_API},
            responseType: 'arraybuffer'
        }
    )
    // convert arrayBuffer from binary to base64
    const base64Image = Buffer.from(data ).toString('base64');
    const resultImage = `data:image/png;base64,${base64Image}`

    // user used image, decrement in creditBalance, update the same in DB
    await userModel.findByIdAndUpdate(user._id, {creditBalance:user.creditBalance-1});

    // display the data
    res.status(200).json({
        success: true,
        message: 'Image Generated',
        creditBalance: user.creditBalance-1,
        resultImage
    })
}
catch(err){
    res.status(503).json({success:false, message: `ERROR: ${err.message}`})
}

}
