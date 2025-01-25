import mongoose from "mongoose";
import Guarantor from "../models/Guarantor.models.js"


const addData = (req, res) => {
  const { catogery, subcategory , deposit , loanPeriod } = req.body;

  if (!catogery) return res.status(400).json({ message: "catogery required" });
  if (!subcategory) return res.status(400).json({ message: "subcategory required" });
  if (!deposit) return res.status(400).json({ message: "deposit required" });
  if (!loanPeriod) return res.status(400).json({ message: "loanPeriod required" });

  const finance = Guarantor.create({
    catogery,
    subcategory,
    deposit,
    loanPeriod,
  });
  res.status(201).json({
    message: "data added to database successfully",
  });
};
