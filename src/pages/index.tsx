import Head from "next/head";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import Example from "@/components/homepage/Example";
import News from "./NewsPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className=''>
        <News />
      </main>
    </>
  );
}
