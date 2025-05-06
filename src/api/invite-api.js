export const sendInviteRequest = async (values) => {
  await fetch(`${process.env.REACT_APP_API_PROD}/api/hraviratoms-client/create`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
}

export const getGuests = async () => {
 return await fetch(`${process.env.REACT_APP_API_PROD}/api/hraviratoms-client/guests`);
}