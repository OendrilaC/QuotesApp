import nodeMailer from "nodemailer";

const transporter = nodeMailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export const sendVerificationEmail = (to, token) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject: "Email Verification",
    html: `<p>Please verify your email by clicking on the following link:</p>
           <a href="${process.env.FRONTEND_URL}/verify-email?token=${token}">Verify Email</a>`,
  };

  return transporter.sendMail(mailOptions);
};
