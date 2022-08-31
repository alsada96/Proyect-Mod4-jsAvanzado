import { Router } from "express";
import { methods as bookController } from "./../controllers/books.controllers"

const router = Router();

/* A router that is used to create the routes for the API. */
router.get("/", bookController.getBooks); // GET http://localhost:5000/api-restfull/products/
router.get("/:sku", bookController.getBook); // GET http://localhost:5000/api-restfull/products/:sku
router.post("/", bookController.addBook); // POST http://localhost:5000/api-restfull/products/
router.put("/:sku", bookController.updateBook); // PUT http://localhost:5000/api-restfull/products/:sku
router.delete("/:sku", bookController.deleteBook);// DELETE http://localhost:5000/api-restfull/products/:sku

export default router;