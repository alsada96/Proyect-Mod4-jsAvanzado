import express from "express";
import morgan from "morgan";

/* Importing the productRoutes from the product.routes file. */
import bookRoutes from "./routes/books.routes";

const app = express();

/* Setting the port to 4000. */
app.set("port",4000);

/* Middlewares */
app.use(morgan("dev"));
app.use(express.json());

/* Importing the productRoutes from the product.routes file. */
app.use("/api/books", bookRoutes);

export default app;
