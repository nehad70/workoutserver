const plans = require("../Models/workoutSchema");

exports.addWorkout= async(req,res)=>{
    console.log("inside add");
    const image = req.file.filename
    console.log(image);
    const {title,repeat,instructions,category,focusArea}=req.body
    console.log(title,repeat,instructions,category,focusArea);
try{
    const existPlan = await plans.findOne({title})
    if (existPlan) {
        res.status(406).json('Plan Already Exists')

        
    }
    else{
        const newPlan = new plans({
            title,image,repeat,instructions,category,focusArea

        })
        await newPlan.save()
        res.status(200).json(newPlan)

    }
}
catch(err){
    res.status(401).json(err)
}

}
exports.getallplan=async(req,res)=>{
    const search=req.query.search
    console.log(search);
    const query={
        // regular expression,i-rmv casesensitivity
        title:{
            $regex:search,$options:'i'
    
        }
    }
        try{
            const allplan=await plans.find(query)
            res.status(200).json(allplan)
        }
        catch(err){
            res.status(401).json(`request failed due to :${err}`)
        }
        
        }
        exports.getdetails=async(req,res)=>{
           
            
            const {id} =req.params
            console.log(id);
                try{
                    const allplan=await plans.findOne({_id:id})
                    res.status(200).json(allplan)
                }
                catch(err){
                    res.status(401).json(`request failed due to :${err}`)
                }
                
                }

                exports.deletePlan= async(req,res)=>{
                    const{id}=req.params
                    try{
                        const removeProject = await plans.findByIdAndDelete({_id:id})
                        res.status(200).json(removeProject)
                
                    }catch(err){
                        res.status(401).json(err)
                    }
                }    