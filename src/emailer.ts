import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const mail = {
  user: process.env.USER_EMAIL,
  pass: process.env.PASS,
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: mail.user,
    pass: mail.pass,
  },
});

// Send email
export async function sendMail(to: string, subject: string, text: string) {
  console.log(mail);
  try {
    await transporter.sendMail({
      from: mail.user,
      to,
      subject,
      text,
    });
    console.log("Email successfully sent!");
  } catch (error) {
    console.error("Error sending email: ", error);
  }
}
