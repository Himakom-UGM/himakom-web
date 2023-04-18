import Card from '@/components/news/Card';

export default function Display() {
	return (
		<main className="pt-52">
			<Card
				title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				date="12/12/2021"
				image="/images/content/ldk.png"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				author="Lorem ipsum"
				key={1}
				topic="Lorem ipsum"
				primary={true}
			/>
		</main>
	);
}
