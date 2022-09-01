import { Router } from "express";
import { methods as bookController } from "./../controllers/books.controllers"

const router = Router();

/* A router that is used to create the routes for the API. */
router.get("/", bookController.getBooks); 
router.get("/:id", bookController.getBook); 
router.post("/", bookController.addBook); 
router.put("/:id", bookController.updateBook); 
router.delete("/:id", bookController.deleteBook);

export default router;