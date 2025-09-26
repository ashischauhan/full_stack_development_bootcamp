import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendEmail(to, subject, text) {
  const msg = {
    to,
    from: "callmeasis3@gmail.com", // Use the email address or domain you verified above
    subject,
    text,
    // html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  try {
    await sgMail.send(msg);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    if (error.response) {
      console.error("Response body:", error.response.body);
    }
    throw new Error("Failed to send email");
  }
}
