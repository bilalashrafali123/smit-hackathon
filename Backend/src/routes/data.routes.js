import express from "express";
import { addData } from "../controllers/data.controllers.js";

const router = express.Router();


router.post("/data", addData);


export default router;