import mongoose from "mongoose";
import Guarantors from "../models/Guarantor.models.js";



const addData = (req, res) => {
  const { name1, email1 , location1 , cnic1 , name2 , email2 , location2 , cnic2 } = req.body;

  if (!name1) return res.status(400).json({ message: "name1 required" });
  if (!email1) return res.status(400).json({ message: "email1 required" });
  if (!location1) return res.status(400).json({ message: "location1 required" });
  if (!cnic1) return res.status(400).json({ message: "cnic1 required" });
  if (!name2) return res.status(400).json({ message: "name2 required" });
  if (!email2) return res.status(400).json({ message: "email2 required" });
  if (!location2) return res.status(400).json({ message: "location2 required" });
  if (!cnic2) return res.status(400).json({ message: "cnic2 required" });

  const finance = Guarantors.create({
    name1,
    email1,
    location1,
    cnic1,
    name2,
    email2,
    location2,
    cnic2

  });
  res.status(201).json({
    message: "data added to database successfully",
  });
};


export default addData