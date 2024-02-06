

const mongoose = require ('mongoose')

const workoutSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true

    },
    image:{
        type:String,
        require:true
    }  ,
    repeat:{
        type:String,
        require:true
    },
    instructions:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    focusArea:{
        type:String,
        require:true
    }
})

const plans =mongoose.model("plans",workoutSchema)

module.exports =plans
