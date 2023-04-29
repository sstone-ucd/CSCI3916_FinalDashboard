import mongoose from "mongoose";

const ResultsSchema = new mongoose.Schema(
  {
    pid: {
      type: Number,
      required: true,
    },
    accession: {
      type: Number,
      required: true,
      unique: true,
    },
    DOS: String,
    locationID: String,
    incPos: [
        {
            testName: String,
            result: Number,
        },
    ],
    incNeg: [
        {
            testName: String,
            result: Number,
        },
    ],
    illicitPos: [
        {
            testName: String,
            result: Number,
        },
    ],
    consPos: [
        {
            testName: String,
            result: Number,
        },
    ],
  },
  { timestamps: true }
);

const Results = mongoose.model("Results", ResultsSchema);
export default Results;
