import Head from "next/head";
import Blogpost from "../../components/detail-post/Example"

export default function Post() {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <main>
        Post
      <Blogpost />
      </main>
    </>
  );
}
