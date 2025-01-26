import mongoose from "mongoose";
import Finances from "../models/data.models.js";
import dotenv from "dotenv";


dotenv.config();



const addData = (req, res) => {
  const { cnic, reasonForLoan , category , subCatogary , deposit , loanPeriod } = req.body;

  if (!cnic) return res.status(400).json({ message: "cnic required" });
  if (!reasonForLoan) return res.status(400).json({ message: "reasonForLoan required" });
  if (!category) return res.status(400).json({ message: "category required" });
  if (!subCatogary) return res.status(400).json({ message: "subCatogary required" });
  if (!deposit) return res.status(400).json({ message: "deposit required" });
  if (!loanPeriod) return res.status(400).json({ message: "loanPeriod required" });

  const finance = Finances.create({
    cnic,
    reasonForLoan,
    category,
    subCatogary,
    deposit,
    loanPeriod,
  });
  res.status(201).json({
    message: "data added to database successfully",
  });
};



const getAllDatas = async (req, res) => {
  const datas = await Datas.find({});
  res.status(200).json({
    datas: datas,
  });
};

const getDataWithId = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not valid Id" });
  }

  const data = await Datas.findById(id);
  if (!data) {
    res.status(404).json({
      message: "no data found!",
    });
    return;
  }

  res.status(200).json(todo);
};



const deleteData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not valid id" });
  }

  const data = await Datas.findOneAndDelete({ _id: id });

  if (!data) {
    return res.status(404).json({ error: "No data found" });
  }
  res.status(200).json({
    message: "data deleted successfully",
    data,
  });
};




const editData = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  try {
    const updatedData = await Datas.findOneAndUpdate(
      { _id: id },
      { title, description, completed },
      { new: true, runValidators: true }
    );

    if (!updatedData) {
      return res.status(404).json({ error: "No data found" });
    }

    res.status(200).json({
      message: "Data updated successfully",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong", details: error.message });
  }
};

export { addData , getAllDatas , getDataWithId , deleteData , editData , uploadImage };