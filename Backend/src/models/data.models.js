import mongoose from "mongoose";


const financeSchema = new mongoose.Schema(
  {
    catogery: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },
    deposit: {
      type: Number,
      required: true,
    },
    loanPeriod: {
      type: Number,
      required: true,
    },
    cnic : {
      type:Number,
      required:true
    },
    reasonforloan : {
      type:String,
      required:true
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Finances", financeSchema);