export const createMailerLiteSubscriber = async ({ email, name }) => {
  const response = await fetch("/api/create-mailer-lite-subscriber", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email, name }),
  }).then(res => res.json());
  return response;
};
