const { books } = require("../Database/data")

exports.fetchBooks = async(req, res)=>{
    const datas = await books.findAll()
    res.json({
        message: "Books fetced successfully.",
        datas
    })
}

exports.addBook = async(req, res)=>{
    const {bookName, bookPrice, bookAuthor, bookGenre} = req.body
    await books.create({
        bookName : bookName,
        price : bookPrice,
        bookAuthor : bookAuthor,
        bookGenre : bookGenre
})
    res.json({
        message: "Book added successfully."
    })
}

exports.deleteBook = (req, res)=>{
    res.json({
        message: "Books deleted successfully."
    })
}

exports.editBook = (req, res)=>{
    res.json({
        message: "Books updated successfully."
    })
}

exports.singleFetchBook = async function(req, res){
    const id = req.params.id
    const datas = await books.findByPk(id)
    res.json({
        message : "Single Book Fetched Sucessfully",
        datas
    })
}

// module.export = {fetchBooks, addBook, deleteBook, editBook}