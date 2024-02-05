const Author  = require("../models/author.model")


module.exports = {
    createAuthor : (req,res) =>{
        Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },
    // getAll authors

    getAuthors : (req ,res) =>{
        Author.find().sort({name: 1}).collation({locale:'en'}) // collation is for making it case insensitive
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
    },
    getOne :(req,res) =>{
        Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
    },

    updateOne : (req,res) => {
        
        Author.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true , runValidators: true})
        .then(author => res.json(author))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    deleteOne : (req,res) => {
        Author.deleteOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
    }

    
}