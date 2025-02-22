import jwt from 'jsonwebtoken'

const userAuth = async(req, res, next)=>{
    
    
        const {token} = req.headers;

    // check if headers is non-empty
    if(!token){return res.status(400).json({success:false, message:'Invalid Entry...'})}
    try{
        //if valid token then decode it
        const tokenDecode = jwt.verify(token, process.env.JWT_PASS);
        
    
        if(tokenDecode && tokenDecode.id){ 
            req.body.userId = tokenDecode.id; //attach userId to body
            return next();
        }
        else{return res.status(404).json({success:false, message: 'Invalid user token!'})}

        
    }
    catch(err){
        return res.status(404).json({
            success: false,
            message: `Error! ${err.message}`
        })
    }
}

export default userAuth;