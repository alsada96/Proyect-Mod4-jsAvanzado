/* Importing the getConnection function from the connection.js file. */
import { getConnection } from "./../commons/connection.js"

/**
 * It gets a connection to the database, then it queries the database for all the books, then it sends
 * the result back to the client.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const getBooks = async (req, res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM books;");
        res.json(result);
    }catch (error){
        res.status(500);
        res.send(error.message);
    }
};

/**
 * It gets a book from the database and returns it as a JSON object.
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 */
const getBook = async (req, res) =>{
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM books WHERE id = ?;", id);
        res.json(result);
    }catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

/**
 * It takes the data from the request body, checks if all the fields are filled, and if they are, it
 * creates a new book object and inserts it into the database.
 * @param req - The request object. This represents the HTTP request and has properties for the request
 * query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const addBook = async (req, res) =>{
    try{
        const { title, total_pages, author, nationality, language, cover_url, editorial } = req.body;

        if (title === undefined || total_pages === undefined || author === undefined || nationality === undefined || language === undefined || cover_url === undefined || editorial === undefined ) {
            res.status(400).json({message:"Bad Request. Please fill all field."})
        }

        const book = { title, total_pages, author, nationality, language, cover_url, editorial }
        const connection = await getConnection();
        await connection.query("INSERT INTO books SET ?", book);
        res.json({message: "Book added"});
    }catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

/**
 * It updates a book in the database
 * @param req - The request object.
 * @param res - The response object.
 */
const updateBook = async (req, res) =>{
    try{
        const { id } = req.params;
        const { title, total_pages, author, nationality, language, cover_url, editorial } = req.body;

        if ( title === undefined || total_pages === undefined || author === undefined || nationality === undefined || language === undefined || cover_url === undefined || editorial === undefined ) {
            res.status(400).json({message:"Bad Request. Please fill all field."});
        }

        const book = { title, total_pages, author, nationality, language, cover_url, editorial };
        const connection = await getConnection();
        const result = await connection.query("UPDATE books SET ? WHERE id = ?", [book, id]);
        res.json(result)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
};

/**
 * It deletes a book from the database based on the id of the book.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM books WHERE id = ?", id);
        res.json(result)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
};

export const methods = {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook

};
