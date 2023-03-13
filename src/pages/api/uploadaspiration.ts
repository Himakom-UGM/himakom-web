import { NextApiRequest, NextApiResponse } from 'next';
import { contentfulManagement } from '@/utils/contentful/contentfulManagement';
import multiparty from 'multiparty';

const uploadAspiration = async (req: NextApiRequest, res: NextApiResponse) => {
	const form = new multiparty.Form();
	const data = await new Promise((resolve, reject) => {
		form.parse(req, function (err, fields, files) {
			if (err) reject({ err });
			resolve({ fields, files });
		});
	});
	const { fields, files } = data as any;
	const { to, from, message,subject } = fields;
	contentfulManagement
		.getSpace(process.env.CONTENTFUL_SPACE_ID!)
		.then((space) =>
			space.getEnvironment('master').then((environment) =>
				environment
					.createEntry('aspiration', {
						fields: {
							to: {
								'en-US': to[0],
							},
							from: {
								'en-US': from[0],
							},
							message: {
								'en-US': message[0],
							},
              subject: {
                'en-US': subject[0],
              },
						},
					})
					.then((entry) => {
            entry.publish()
            res.status(200).json({ success: true });
          })
					.catch((err) => res.status(500).json({ success: false, err }))
			)
		);

};

export default uploadAspiration;
export const config = {
	api: {
		bodyParser: false,
	},
};
