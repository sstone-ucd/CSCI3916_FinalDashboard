import Patient from "../models/Patients.js";
import Results from "../models/Results.js";

export const getPatients = async (req, res) => {
    try {
      const patients = await Patient.find()
          
    res.status(200).json(patients);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
};    
    
