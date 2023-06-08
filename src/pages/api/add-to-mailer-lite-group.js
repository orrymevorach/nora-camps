const MailerLite = require("@mailerlite/mailerlite-nodejs").default;

const mailerlite = new MailerLite({
  api_key: process.env.MAILER_LITE_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  try {
    const { subscriberId, groupId } = req.body;
    console.log("Adding MailerLite subscriber to group...");
    await mailerlite.groups
      .assignSubscriber(subscriberId, groupId)
      .then(response => {
        console.log("Subscriber added successfuly...");
        console.log(response.data);
        res.status(200).json(response.data);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        console.log(
          "There was an error, subscriber wasn't added to a group..."
        );
        res.status(error.statusCode || 500).json(error);
      });
  } catch (err) {
    res.status(err.statusCode || 500).json(err);
  }
}
