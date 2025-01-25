import express from "express";
import { addData } from "../controllers/data.controllers.js";

const router = express.Router();


router.post("/guarantordata", addData);


export default router;