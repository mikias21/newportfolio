import Mailjet from "node-mailjet";

// const mailjet = new Mailjet({
//   apiKey: process.env.REACT_APP_API_KEY,
//   apiSecret: process.env.REACT_APP_SECRET_KEY,
//   options: {
//     headers: {
//       Accept: "application/json",
//       "API-Key": process.env.REACT_APP_API_KEY,
//       "Content-Type": "application/json",
//     },
//   },
// });
const client = Mailjet.apiConnect(
  process.env.REACT_APP_API_KEY,
  process.env.REACT_APP_SECRET_KEY
);

const send_email = async (name, email, message) => {
  // try {
  //   const response = await mailjet.post("send", { version: "v3.1" }).request({
  //     Messages: [
  //       {
  //         From: {
  //           Email: email,
  //           Name: name,
  //         },
  //         To: [
  //           {
  //             Email: "mikiaszardoz0x00c@outlook.com",
  //             Name: "Mikias",
  //           },
  //         ],
  //         Subject: "Let's connect from your portfolio",
  //         TextPart: message,
  //       },
  //     ],
  //   });
  //   return response;
  // } catch (err) {
  //   throw err;
  // }
  return client.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Name: name,
          Email: email,
        },
        To: "mikiaszardoz0x00c@outlook.com",
        TextPart: message,
        Subject: "Let's connect from your portfolio",
      },
    ],
  });
};

export default send_email;
