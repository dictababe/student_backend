import mongoose from 'mongoose'
//import mongoose library into our file

//an instance of schem and model
const{Schema, model} = mongoose

//creating a variable for our schema
const studentSchema = Schema({
first_name : {
    type: String,
    required: true
},
last_name:{
    type: String,
    required: true
},
date_of_birth: {
    type: String,
    required: true
},
school: {
    type: String,
    required: true
},
status:{
    type:Boolean,
    required:false,
    default:false
}

})

const studentModel = model('student', studentSchema)

export default studentModel
