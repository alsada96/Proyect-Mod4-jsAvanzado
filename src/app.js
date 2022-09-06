// import { config } from "dotenv";
import express from "express";
// import morgan from "morgan";

/* Importing the productRoutes from the product.routes file. */
import bookRoutes from "./routes/books.routes.js";
import videoRoutes from "./routes/videos.routes.js";
import config from "./config.js";

const app = express();

const port = config.port || 4000;

/* Setting the port to 4000. */
app.set("port",port);

/* Middlewares */
// app.use(morgan("dev"));
app.use(express.json());

/* Importing the productRoutes from the product.routes file. */
app.use("/api/books", bookRoutes);
app.use("/api/videos", videoRoutes);

export default app;
