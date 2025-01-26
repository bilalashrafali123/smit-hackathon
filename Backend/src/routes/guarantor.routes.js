import express from "express";
import { addData } from "../controllers/guarantor.controllers.js";

const router = express.Router();


router.post("/guarantorData", addData);



export default router;