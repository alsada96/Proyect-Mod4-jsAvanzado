/* Importing the config function from the dotenv module. */
import { config } from "dotenv";

/* Loading the environment variables from the .env file. */
config();


/* Exporting the default object. */
export default {
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || ""
};
