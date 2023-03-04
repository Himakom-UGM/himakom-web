import Hero from "@/components/division/Hero";
import Progams from "@/components/division/Progams";
import Head from "next/head";

export default function Division() {
  return (
    <>
      <Head>
        <title>Division</title>
        
      </Head>
      <main>
        <Hero/>
        <Progams/>
      </main>
    </>
  );
}
