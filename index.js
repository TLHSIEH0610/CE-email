import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import "dotenv/config";

const port = 4000;
const transporter = nodemailer.createTransport({
  service: process.env.email_service,
  host: process.env.email_host,
  port: parseInt(process.env.email_port, 10),
  secure: true,
  auth: {
    user: process.env.email_address,
    pass: process.env.app_password,
  },
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/emails", (req, res) => {
  const { to, subject, body } = req.body;

  const configOptions = {
    from: process.env.email_address,
    to,
    subject,
    text: body,
  };

  transporter.sendMail(configOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send(`Email sent: ${info.messageId}`);
  });
});

app.listen(port, () => {
  console.log({
    service: process.env.email_service,
    host: process.env.email_host,
    port: process.env.email_port,
    secure: true,
    auth: {
      user: process.env.email_address,
      pass: process.env.app_password,
    },
  });
  console.log(`listening to port ${port}`);
});
