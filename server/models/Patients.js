import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    pid: {
      type: Number,
      required: true,
      max: 50,
      unique: true,
    },
    orders: [
        {
            accession: Number,
        },
    ]

  },
  { timestamps: true }
);

const Patient = mongoose.model("Patient", PatientSchema);
export default Patient;
