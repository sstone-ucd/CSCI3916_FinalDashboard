import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema(
  {
    locationID: Number,
    locationName: String,
  },
);

const Location = mongoose.model("Location", LocationSchema);
export default Location;