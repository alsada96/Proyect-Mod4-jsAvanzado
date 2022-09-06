/* Importing the getConnection function from the connection.js file. */
import { getConnection } from "./../commons/connection.js"

/**
 * It gets a connection to the database, then it queries the database for all the books, then it sends
 * the result back to the client.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const getVideos = async (req, res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM videos;");
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
const getVideo = async (req, res) =>{
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM videos WHERE id = ?;", id);
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
const addVideo = async (req, res) =>{
    try{
        const { video_name,url,duration, views_number, video_type } = req.body;

        if (video_name === undefined || url === undefined || duration === undefined || views_number === undefined | video_type === undefined) {
            res.status(400).json({message:"Bad Request. Please fill all field."})
        }

        const video = { video_name, url, duration, views_number, video_type }
        const connection = await getConnection();
        await connection.query("INSERT INTO videos SET ?", video);
        res.json({message: "Video added"});
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
const updateVideo = async (req, res) =>{
    try{
        const { id } = req.params;
        const { video_name,url,duration, views_number, video_type } = req.body;

        if ( id === undefined || video_name === undefined || url === undefined || duration === undefined ) {
            res.status(400).json({message:"Bad Request. Please fill all field."});
        }

        const video = { id, video_name, url, duration, views_number, video_type };
        const connection = await getConnection();
        const result = await connection.query("UPDATE videos SET ? WHERE id = ?", [video, id]);
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
const deleteVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM videos WHERE id = ?", id);
        res.json(result)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
};

export const methods = {
    getVideos,
    getVideo,
    addVideo,
    updateVideo,
    deleteVideo

};