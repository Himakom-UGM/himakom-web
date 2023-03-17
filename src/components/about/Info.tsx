import Image from 'next/image';

type PropsDivision = {
	title: string;
	description: string;
	image: string;
	logo: string;
};

export default function Info(props: { division: PropsDivision }) {
	const data = props.division;
	return (
		<div>
			<div className="flex rounded-2xl px-6">
				<div className="basis-1/2">
					<Image
						src={'https' + data.image}
						width={1920}
						height={1080}
						alt="foto divisi"
					/>
				</div>
				<div className="flex basis-1/2 flex-col gap-y-4">
					<Image
						src={'https' + data.logo}
						width={500}
						height={500}
						alt="logo"
					/>
					<h1 className="text-3xl">{data.title}</h1>
					<p>{data.description}</p>
				</div>
			</div>
		</div>
	);
}
