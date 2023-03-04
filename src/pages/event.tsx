import Head from "next/head";
import Image from "next/image"

const Event: React.FunctionComponent = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>Event</title>
            </Head>
            <div className="relative w-screen h-screen overflow-hidden bg-cover">
                <Image
                    src={"/patternpad.png"}
                    quality={100}
                    fill
                    alt="hero"
                    objectFit="cover"
                    className="-z-[9999]"
                />
                <div className="w-[284px] h-[349px] bg-white rounded-[20px]">
                    <div className="flex flex-col">
                        <div className="">Our Planned </div>
                        <div className="">Activities</div>
                        <div className=""> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio aliquid animi, officiis eius aliquam hic veniam minus reprehenderit incidunt, quidem voluptatem distinctio magni doloremque magnam amet molestias nulla, consectetur nisi.</div>
                    </div>
                    <button className="rounded-full bg-customYellow-200">Button Here</button>
                </div>

            </div>

        </>
    );
}
export default Event;
