let nodemailer = require("nodemailer");

export default async function handler(req, res) {
  const { fields = [], formName = "" } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    auth: {
      user: process.env.MAILGUN_USER,
      pass: process.env.MAILGUN_SMTP_PASSWORD,
    },
  });

  const fieldData = Object.entries(fields)
    .map(
      ([key, value]) =>
        `<div style="margin: 10px 0;">
          <p style="color:#999999;text-transform:lowercase;font-size:14px;margin:0;">${key}</p>
          <p style="font-size:16px;margin:0;">${value}</p>
        </div>
        `
    )
    .join(""); // join removes the trailing commas

  await transporter.sendMail({
    from: "Nora Camps Contact Form Submission noreply@noracamps.com",
    to: ["nora@noracamps.com", "justindemarchi@gmail.com", "ncamps@duo.ca"],
    subject: `${formName} Submission`,
    html: `
    <div style="width:550px;margin:0 auto;display:block">
        <h2 style="font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:24px">New ${formName} Submission for Nora Camps</h2>
        ${fieldData}
        <p style="font-size:16px;"><a href="mailto:${fields.email}">Click here</a> to reply to ${fields.name}</p>
      </div>
    `,
  });

  res.status(200).json({ success: true });
}
