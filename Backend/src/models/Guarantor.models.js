import mongoose from "mongoose";


const GuarantorSchema = new mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Guarantor", GuarantorSchema);
