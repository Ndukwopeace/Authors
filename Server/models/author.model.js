const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name : {type : String ,
    required: [true , "Name of Author is required"],
    minLength : [3,"Must be atleast 3 characters long"]}
},{timestamps: true})

module.exports = mongoose.model("Author" , AuthorSchema)