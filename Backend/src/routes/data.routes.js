import express from "express";

import { addData,  } from "../controllers/data.controllers.js";

const router = express.Router();


router.post("/financeData", addData);


export default router;