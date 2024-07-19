import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { sendMail } from "./emailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running fine!");
});

app.post("/send-email", async (req: Request, res: Response) => {
  console.log(req.body);
  const { to, subject, text } = req.body;
  await sendMail(to, subject, text);
  res.send("Email sent! Review results please.");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});
