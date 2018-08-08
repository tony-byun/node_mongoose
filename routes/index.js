module.exports = function(app, Book)  {
    // get all books
    app.get('/api/books', function(req, res) {
        Book.find(function(err, books){
            if(err){
                return res.status(500).send({error: 'database failure'});
            }
            res.json(books);
        });
    });

    // get single book
    app.get('/api/books/:book_id', function(req, res) {
        res.end();
    });

    // get book by author
    app.get('/api/books/author/:author_id', function(req, res) {
        res.end();
    });

    // create book
    app.post('/api/books', function(req, res){
        var book = new Book();
        book.title = req.body.title;
        book.author = req.body.author;
        book.published_date = new Date(req.body.published_date);
    
        book.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }
            res.json({result: 1});
    
        });
    });

    // update book
    app.put('/api/books/:book_id', function(req, res) {
        res.end();
    });

    // delete book
    app.delete('/api/books/:book_id', function(req, res) {
        res.end();
    });
}