export const sendInviteRequest = async (values) => {
  await fetch(`https://hraviratoms-server.onrender.com/api/wed-4-order/create`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
}

export const getGuests = async () => {
 return await fetch(`https://hraviratoms-server.onrender.com/api/wed-4-order/guests`);
}