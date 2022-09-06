import { Router } from "express";
import { methods as videoController } from "./../controllers/videos.controllers.js"

const router = Router();

/* A router that is used to create the routes for the API. */
router.get("/", videoController.getVideos); 
router.get("/:id", videoController.getVideo); 
router.post("/", videoController.addVideo); 
router.put("/:id", videoController.updateVideo); 
router.delete("/:id", videoController.deleteVideo);

export default router;