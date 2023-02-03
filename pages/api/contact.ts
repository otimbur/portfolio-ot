import { mailOptions, transporter } from "../../config/nodemailer";

export const handler = (
  req: {
    method: string;
    body: any;
  },
  res: {
    status: (arg0: number) => {
      (): any;
      json: { (arg0: { message: string }): void };
    };
  }
) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.firstName || !data.lastName || !data.email || !data.notes) {
      return res.status(400).json({ message: "Bad Request" });
    }
    try {
      transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: "This is a test string",
        html: "",
      });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad Request" });
};

export default handler;
