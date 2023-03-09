import React from 'react';
import News from '../components/news/News';

const NewsPage = () => {
	return (
		<div className="mx-auto flex flex-col customMd:flex-row max-w-7xl px-8 pt-20">
			<article className="flex basis-3/4 flex-col gap-y-2 mb-12">
				<h1 className="customMd:max-w-[70%] text-3xl font-semibold 2xl:text-4xl">
					Lorem ipsum dolor sit amet consectetur adipiscing elit
				</h1>
				<p className="w-fit rounded-3xl border border-black px-5 py-1">
					Divisi
				</p>
				<p>Posted on 02/05/20 by Ramzy Izza</p>
				<div className="first-letter mt-3 mb-6 flex h-[400px] w-full items-center justify-center bg-formColor-100 text-3xl text-slate-600">
					Image Here
				</div>

				<div className="flex flex-col gap-y-6">
					<div className="flex flex-col gap-y-2">
						<h2 className="text-2xl font-semibold">What is Lorem Ipsum?</h2>
						<p className="text-justify">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry&apos;s standard dummy
							text ever since the 1500s, when an unknown printer took a galley
							of type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
					</div>
					<div className="flex flex-col gap-y-2">
						<h2 className="text-2xl font-semibold">Where does it come from?</h2>
						<p className="text-justify">
							Contrary to popular belief, Lorem Ipsum is not simply random text.
							It has roots in a piece of classical Latin literature from 45 BC,
							making it over 2000 years old. Richard McClintock, a Latin
							professor at Hampden-Sydney College in Virginia, looked up one of
							the more obscure Latin words, consectetur, from a Lorem Ipsum
							passage, and going through the cites of the word in classical
							literature, discovered the undoubtable source. Lorem Ipsum comes
							from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et
							Malorum&quot; (The Extremes of Good and Evil) by Cicero, written
							in 45 BC. This book is a treatise on the theory of ethics, very
							popular during the Renaissance. The first line of Lorem Ipsum,
							&quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
							section 1.10.32.
						</p>
						<p className="text-justify">
							The standard chunk of Lorem Ipsum used since the 1500s is
							reproduced below for those interested. Sections 1.10.32 and
							1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero
							are also reproduced in their exact original form, accompanied by
							English versions from the 1914 translation by H. Rackham.
						</p>
					</div>
				</div>
				<div className="my-6">
					<div className="flex h-[400px] w-full items-center justify-center bg-formColor-100 text-3xl text-slate-600">
						Image Here
					</div>
					<p className="text-slate-700">Description of Image (if any)</p>
				</div>
				<div className="flex flex-col gap-y-6">
					<div className="flex flex-col gap-y-2">
						<h2 className="text-2xl font-semibold">Why do we use it?</h2>
						<p className="text-justify">
							Contrary to popular belief, Lorem Ipsum is not simply random text.
							It has roots in a piece of classical Latin literature from 45 BC,
							making it over 2000 years old. Richard McClintock, a Latin
							professor at Hampden-Sydney College in Virginia, looked up one of
							the more obscure Latin words, consectetur, from a Lorem Ipsum
							passage, and going through the cites of the word in classical
							literature, discovered the undoubtable source. Lorem Ipsum comes
							from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et
							Malorum&quot; (The Extremes of Good and Evil) by Cicero, written
							in 45 BC. This book is a treatise on the theory of ethics, very
							popular during the Renaissance. The first line of Lorem Ipsum,
							&quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
							section 1.10.32.
						</p>
						<p className="text-justify">
							The standard chunk of Lorem Ipsum used since the 1500s is
							reproduced below for those interested. Sections 1.10.32 and
							1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero
							are also reproduced in their exact original form, accompanied by
							English versions from the 1914 translation by H. Rackham.
						</p>
					</div>
					<p className="text-slate-700">Put any text or notes below here</p>
				</div>
			</article>
			<section className="basis-1/4 border">Section 2</section>
		</div>
	);
};

export default NewsPage;
