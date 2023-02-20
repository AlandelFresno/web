// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

type Body = {
  name: string;
  emailAddress: string;
  companyWebite: string;
  phoneNumber: string;
  howCanWeHelp: string;
};

type ResData = {
  text: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {
  const data: Body = req.body;

  const msg = {
    to: 'contact@boolers.net', // Change to your recipient
    from: 'boolerbusiness@gmail.com', // Change to your verified sender
    subject: `${data.name} requested help using Boolers website`,
    html: `
    We have received a new message from our website. Please find below the information provided by the sender:
    <br/><br/>
    
    <b>Name:</b> ${data.name}<br/>
    <b>Email:</b> ${data.emailAddress}<br/>
    <b>Website:</b> ${data.companyWebite}<br/>
    <b>Phone number:</b> ${data.phoneNumber}
    <br/><br/>
    <b>Message content</b>:<br/>
    ${data.howCanWeHelp}
`,
  };

  sgMail.setApiKey('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');

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
      res.status(200).json({ text: 'Email sent' });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ text: 'There is an error on the email API' });
    });
}

