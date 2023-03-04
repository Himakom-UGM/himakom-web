import Head from "next/head";
import Image from "next/image"
import FotoAngkatan from "public/images/bg/foto_angkatan.png"
import TextureEvent from "public/images/bg/texture_page_events.png"
import Searching from "public/images/icon/searching_forEvent.svg"
import Send from "public/images/icon/send_icon.svg"
import Pattern from "public/images/bg/patternpad.png"

export default function Event() {
    return (
        <>
            <Head>
                <title>Event</title>
            </Head>
            <main>
                <div className="w-full flex-wrap relative">
                    <Image
                        src={Pattern}
                        quality={100}
                        alt="hero"
                        fill
                        className="-z-[9999] object-cover"
                    />
                    <div className="md:flex-row flex flex-col justify-center items-center content-around gap-[15px] pt-5">
                        <div className="w-[284px] md:w-[1344px] md:h-[654px] bg-[#FFFFFF] rounded-[20px] mt-auto">
                            <div className="flex flex-col justify-center items-center gap-5">
                                <h1 className="text-[32px] font-bold text-[#3F3F9C]">Our Planned </h1>
                                <h2 className="text-[56px] font-bold text-[#3F3F9C]">Activities</h2>
                                <p className="text-[13px] font-bold text-[#3F3F9C] text-center"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio aliquid animi, officiis eius aliquam hic veniam minus reprehenderit incidunt, quidem voluptatem distinctio magni doloremque magnam amet molestias nulla, consectetur nisi.</p>
                                <button className="w-[138px] h-[42px] rounded-[12px] mb-0 mt-auto bg-[#F3BE00]">Button Here</button>
                            </div>
                        </div>
                        <div className="w-[284px] h-[220px] mb-auto mt-0 bg-[#D9D9D9] rounded-[20px] font-bold text-center drop-shadow-customShadow4-4-14px  flex justify-center items-center">
                            <h3 className="">Calender Here</h3>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="relative flex flex-col w-[375px] h-[172px] bg-[#F3BE00] items-center justify-center drop-shadow-customShadow0-4-4px">
                        <div className="text-[40px] font-bold items-center">Archives</div>
                        <div className="text-[15px] font-medium text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, </div>
                    </div>
                    <div className="relative w-[375px] h-[781px] items-center justify-center">
                        <Image
                            src={FotoAngkatan}
                            objectFit="cover"
                            className="relative h-[781px] object-cover opacity-60"
                            alt=""
                        />
                        <div className="absolute flex flex-row justify-center items-center  left-1/2 -translate-x-1/2 -top-5">
                            <input type="text" placeholder="Find Article.." src={Searching} className=" text-center font-regular w-[283px] h-[44px] rounded-[13px] bg-white drop-shadow-customShadow0-0-4"></input>
                            <Image src={Searching} alt="" className="absolute left-[18.08px] justify-center items-center" /> 
                            <Image src={Send} alt="" className="absolute right-[5.87px]" />
                        </div>
                    </div>
                    {/* <div className="relative flex flex-col w-[320px] h-[781px] items-center justify-center">
                        <Image
                            src={FotoAngkatan}
                            objectFit="cover"
                            className="relative h-[781px] object-cover opacity-60"
                            alt=""
                        />
                        <Image
                            src={TextureEvent}
                            className="absolute scale-[175%] hidden"
                            alt=""
                        />
                        <div className="absolute">
                            <div className="w-[283px] h-[50.75px] bg-[#212152] rounded-t-[12px]"></div>
                            <div className="w-[283px] h-[699.25px] bg-white rounded-[12px] bg-blurBackground"></div>
                        </div> </div>*/}
                </div>

            </main>

        </>
    );
}
