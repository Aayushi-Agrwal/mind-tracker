import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "cookies-next";
import { v4 as uuidv4 } from "uuid";

const hardcodedUser = {
  email: "user@example.com",
  password: "password123",
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (email === hardcodedUser.email && password === hardcodedUser.password) {
    const token = uuidv4(); // Generate a simple UUID token for this example

    // Set cookie
    setCookie("auth-token", token, {
      req,
      res,
      httpOnly: true,
      maxAge: 60 * 60 * 24,
    }); // 1 day expiry

    return res.status(200).json({ success: true, token });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
}
