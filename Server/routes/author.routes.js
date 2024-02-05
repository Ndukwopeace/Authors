const authorController = require("../controllers/author.controller");

module.exports = (app) =>{
    app.post("/api/authors",authorController.createAuthor)
    app.get("/api/authors/:id" , authorController.getOne)
    app.get("/api/authors" , authorController.getAuthors)
    app.put("/api/authors/:id", authorController.updateOne)
    app.delete("/api/authors/:id" , authorController.deleteOne)
}