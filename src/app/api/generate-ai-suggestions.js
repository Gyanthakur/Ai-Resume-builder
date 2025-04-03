import { OpenAI } from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { resume } = req.body;
  if (!resume) {
    return res.status(400).json({ success: false, message: "Missing resume data" });
  }

  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are an expert resume reviewer." },
        { role: "user", content: `Suggest improvements for this resume: ${JSON.stringify(resume)}` },
      ],
    });

    res.status(200).json({ success: true, suggestions: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
