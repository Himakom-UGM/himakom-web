import Head from 'next/head';
import Image from 'next/image';
import imageBackground from 'public/images/bg/image_detail_post.png';
import React from 'react';

export default function DetailPost() {
	return (
		<>
			<Head>
				<title>DetailPost</title>
			</Head>
			<main>
				<div className="flex h-[508px] w-[1440px] flex-col">
					<div className="relative">
						<Image
							src={imageBackground}
							quality={100}
							alt="hero"
							className="brightness-50"
						/>
						<div className="absolute inset-0">
							<button className="h-[42px] w-[138px] rounded-[30px] border-[1px] border-[#FFFFFF] text-[#FFFFFF]">
								Divisi
							</button>
							<h1 className="w-[863px] text-center text-[40px] font-bold text-[#FFFFFF]">
								Lorem ipsum dolor sit amet consectetur adipiscing elit
							</h1>
							<p className="font-light text-[#FFFFFF]">
								Posted on 02/05/20 by Ramzy Izza
							</p>
						</div>
						<div className=" flex flex-row">
							<div className="flex h-full w-full flex-col items-center justify-center">
								<h2 className="text-[36px] font-black">What is Lorem Ipsum?</h2>
								<p className="w-[882.04px] text-justify">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry&apos;s
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
								<h3 className="text-[36px] font-black">
									What does it come from?
								</h3>
								<p className="w-[882.04px] text-justify">
									Contrary to popular belief, Lorem Ipsum is not simply random
									text. It has roots in a piece of classical Latin literature
									from 45 BC, making it over 2000 years old. Richard McClintock,
									a Latin professor at Hampden-Sydney College in Virginia,
									looked up one of the more obscure Latin words, consectetur,
									from a Lorem Ipsum passage, and going through the cites of the
									word in classical literature, discovered the undoubtable
									source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
									&quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
									Good and Evil) by Cicero, written in 45 BC. This book is a
									treatise on the theory of ethics, very popular during the
									Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum
									dolor sit amet..&quot;, comes from a line in section 1.10.32.
									The standard chunk of Lorem Ipsum used since the 1500s is
									reproduced below for those interested. Sections 1.10.32 and
									1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by
									Cicero are also reproduced in their exact original form,
									accompanied by English versions from the 1914 translation by
									H. Rackham.
								</p>
							</div>
							<div>tes</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
