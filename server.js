// server.js

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// メール送信に使用するSMTPの設定
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-password",
  },
});

// POSTリクエストのボディを解析するためのミドルウェア
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// お問い合わせフォームのPOSTリクエストを処理
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "kenp3434membertip1@gmail.com",
    subject: "New Contact Form Submission",
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  // メールを送信
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to send message" });
    } else {
      console.log("Message sent: " + info.response);
      res.status(200).json({ message: "Message sent successfully" });
    }
  });
});

// サーバーを起動
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
