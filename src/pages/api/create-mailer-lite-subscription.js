const MailerLite = require("@mailerlite/mailerlite-nodejs").default;

const mailerlite = new MailerLite({
  api_key: process.env.MAILER_LITE_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  try {
    const { email } = req.body;
    console.log("Creating MailerLite subscripber...");
    await mailerlite.subscribers
      .createOrUpdate({
        email,
        status: "active",
      })
      .then(response => {
        console.log("Subscription plan created successfuly...");
        res.status(200).json(response.data);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        console.log("There was an error, no subscription created...");
        res.status(error.statusCode || 500).json(error);
      });
  } catch (err) {
    res.status(err.statusCode || 500).json(err);
  }
}
