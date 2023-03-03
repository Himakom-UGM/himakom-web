import Form from '@/components/aspiration/Form';
import Layout from '@/components/aspiration/Layout';
import Head from 'next/head';
import Image from 'next/image';

export default function Aspiration() {
	return (
		<div className="p-10">
			<Image
				src="/images/bg/aspiration.png"
				fill
				alt="bg"
				style={{ zIndex: -2 }}
			/>
			<Head>
				<title>Aspiration</title>
			</Head>
			<div className="relative h-full min-h-fit w-full overflow-hidden rounded-xl bg-cover">
				<Image
					src="/images/bg/hero.png"
					fill
					alt="hero"
					style={{
						zIndex: -1,
					}}
				/>
				<div className="grid p-12 grid-cols-7 items-center gap-x-14 px-16">
					<div className="col-span-7 flex flex-col gap-y-8 text-white customMd:col-span-3">
						<h1 className="mt-8 flex flex-col customMd:mt-0">
							<span className="md:text-6xl text-5xl font-semibold">
								Aspirations
							</span>{' '}
							<span className="md:text-5xl text-4xl font-medium">
								for the future.
							</span>
						</h1>
						<p className="text-justify">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
							turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
							nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
							tellus elit sed risus. Maecenas eget condimentum velit, sit amet
							feugiat lectus. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
							dignissim, metus nec fringilla accumsan, risus sem sollicitudin
							lacus, ut interdum tellus elit sed risus. Maecenas eget
							condimentum velit, sit amet feugiat lectus.{' '}
						</p>
					</div>
					<div className="col-span-7 customMd:col-span-4">
						<Layout />
					</div>
				</div>
			</div>
		</div>
	);
}
