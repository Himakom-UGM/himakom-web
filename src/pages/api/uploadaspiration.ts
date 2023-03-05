import { NextApiRequest, NextApiResponse } from "next";
import multiparty from "multiparty";

const uploadAspiration = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new multiparty.Form();
  const data = await new Promise((resolve, reject) => {
    form.parse(req, function (err, fields, files) {
      if (err) reject({ err });
      resolve({ fields, files });
    });
  });
  console.log(`data: `, JSON.stringify(data));

  res.status(200).json({ success: true });
};

export default uploadAspiration;
export const config = {
  api: {
    bodyParser: false,
  },
};
