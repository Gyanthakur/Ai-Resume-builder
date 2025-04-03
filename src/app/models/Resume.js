import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  userId: { type: String, required: true },  // Clerk User ID
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  education: { type: String, required: true },
  experience: { type: String, required: true },
  skills: { type: [String], required: true },
}, { timestamps: true });

export default mongoose.models.Resume || mongoose.model("Resume", ResumeSchema);
