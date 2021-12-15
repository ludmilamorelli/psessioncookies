module.exports = (req,res,next)=>{
    if(req.cookies.Cuki){
        req.session.user = req.cookies.Cuki;
    }
    next()
}