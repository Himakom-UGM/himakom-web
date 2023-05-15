import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { contentfulClientCS } from '@/utils/contentful/contentfulClient';
import Link from 'next/link';
import Head from 'next/head';

type PostsType = {
	initial: string;
	data: {
		name: string;
		link: string;
	}[];
}[];

export default function Exam(props: { posts: any }) {
	const [data, setData] = useState<PostsType>(props.posts);
	const [filteredList, setFilteredList] = useState<PostsType>(props.posts);
	const [containedValue, setContainedValue] = useState<PostsType>(props.posts);
	const [delay, setDelay] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	function delaySearch() {
		setDelay(true);
		setTimeout(() => {
			setDelay(false);
		}, 100);
	}

	function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
		if (delay) {
			return;
		}

		const value = e.target.value.toLowerCase();

		if (value === '') {
			setFilteredList(data);
			delaySearch();
			return;
		}

		// return name of the exam that contains the value
		const filtered = data.map((item: any) => {
			return {
				initial: item.initial,
				data: item.data.filter((post: any) =>
					post.name.toLowerCase().startsWith(value)
				),
			};
		});

		const temp = [];

		// remove the initial if there is no exam that contains the value
		const filtered2 = filtered.filter((item: any) => item.data.length > 0);

		// add the name if there is an exam that contains the value in filtered but not in filtered2
		

		setFilteredList(filtered2);
		delaySearch();
	}

	useEffect(() => {
		async function getExams() {
			const posts = (await contentfulClientCS.getEntries({
				content_type: 'exams',
			})) as any;

			const postsData = posts.items.map((post: any) => {
				return {
					name: post?.fields?.class,
					link: post?.fields?.driveLink,
				};
			});

			// sort by name ascending
			postsData.sort((a: any, b: any) => {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			});

			const groupedPosts = postsData.reduce((acc: any, curr: any) => {
				const initial = curr.name[0];
				const index = acc.findIndex((item: any) => item.initial === initial);
				if (index === -1) {
					acc.push({
						initial,
						data: [curr],
					});
				} else {
					acc[index].data.push(curr);
				}
				return acc;
			}, []);

			return groupedPosts;
		}

		getExams().then((res) => {
			setData(res);
			setFilteredList(res);
		});

		inputRef.current?.focus();
	}, []);

	return (
		<div className="bg-[#3F3F9C] relative min-h-screen px-12 pb-20 pt-24">
			<Head>
				<title>Computer Science&apos;s Exam Archive</title>
			</Head>
			<Image
				src="/main/images/bg/examRight.png"
				alt=""
				width={1500}
				height={1500}
				className="absolute top-0 right-0 z-0 w-[35%]"
			/>
			<Image
				src="/main/images/bg/examLeft.png"
				alt=""
				width={1500}
				height={1500}
				className="absolute bottom-0 left-0 z-0 w-[40%]"
			/>
			<h1 className="text-center text-2xl xl:text-5xl font-semibold text-white lg:text-3xl">
				Himakom&apos;s Exam Archive
			</h1>
			<div className="flex w-full justify-center my-4">
				<div className="relative">
					<input
						type="text"
						placeholder="Search"
						ref={inputRef}
						onChange={handleSearch}
						className="rounded-xl py-[6px] pl-10 pr-4 text-lg outline-none placeholder:text-slate-400"
					/>
					<Image
						src="/main/assets/search-gray.svg"
						width={50}
						height={50}
						alt="search"
						className="absolute left-2 top-1/2 w-5 -translate-y-1/2"
					/>
				</div>
			</div>
			<div className="mx-auto mt-6 w-full px-5">
				<section className="flex w-full text-lg xl:text-xl flex-col gap-y-2">
					{filteredList.map((item) => (
						<div key={item.initial} className="z-10 my-4">
							<h2 className="mb-4 border-b-4 pb-1 text-lg font-semibold text-white">
								{item.initial}
							</h2>
							<div className="grid grid-cols-1 gap-4 text-center customMd:grid-cols-3">
								{item.data.map((post) => (
									<Link
										key={post.name}
										href={post.link}
										className="flex items-center justify-center rounded-xl bg-white p-5"
									>
										{post.name}
									</Link>
								))}
							</div>
						</div>
					))}
				</section>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const groupedPosts = [
		{
			initial: 'A',
			data: [],
		},
		{
			initial: 'B',
			data: [],
		},
		{
			initial: 'C',
			data: [],
		},
		{
			initial: 'D',
			data: [],
		},
		{
			initial: 'E',
			data: [],
		},
		{
			initial: 'F',
			data: [],
		},
	];

	return {
		props: {
			posts: groupedPosts,
		},
	};
}
