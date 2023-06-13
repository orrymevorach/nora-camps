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

export const addMailerLiteSubscriberToGroup = async ({
  subscriberId,
  groupId,
}) => {
  const response = await fetch("/api/add-to-mailer-lite-group", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ subscriberId, groupId }),
  }).then(res => res.json());
  return response;
};
