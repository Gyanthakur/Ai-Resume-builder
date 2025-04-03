import { getAuth } from "@clerk/nextjs/server";

export default function handler(req, res) {
  try {
    const auth = getAuth(req);
    if (!auth.userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    return res.status(200).json({ success: true, userId: auth.userId });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
