import { connectToDB } from "@/lib/db";
import Resume from "@/models/Resume";

export default async function handler(req, res) {
  await connectToDB();

  if (req.method === "POST") {
    try {
      const resume = new Resume(req.body);
      await resume.save();
      res.status(201).json({ success: true, resume });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const resumes = await Resume.find();
      res.status(200).json({ success: true, resumes });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
