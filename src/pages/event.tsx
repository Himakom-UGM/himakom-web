import Head from "next/head";
import Image from "next/image"
import FotoAngkatan from "public/images/bg/foto_angkatan.png"
import TextureEvent from "public/images/bg/texture_page_events.png"
import Pattern from "public/images/bg/patternpad.png"
import DropDown from "public/images/icon/dropDown.svg";
import FindArticle from "src/components/detail-post/Searchbutton"
import img_Mikat from "public/images/bg/Image_Mikat.png"
import img_Hublu from "public/images/bg/image_Hublu.png"
import type { StaticImageData } from 'next/image'

interface GridComponentProps {
    image: string | StaticImageData;
    divisi: string;

}

const GridComponent = ({ image, divisi }: GridComponentProps) => {
    return (

        <a href="" className="w-[264px] h-[139px] bg-[#FFFFFF] rounded-[10px]">
            <div className="flex flex-row">
                <div className="w-full h-full justify-center items-center">
                    <Image src={image} quality={100} alt="hero" className="rounded-l-[10px] w-[108px] h-[139px] object-cover"
                    />
                    <div className="flex w-[56px] h-[16px] bg-[#F3BE00] justify-center items-center -translate-y-7 translate-x-11 rounded-[20px]">
                        <div className="text-[#FFFFFF] font-bold text-[10px]">{divisi}</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <div className="font-bold text-[16px] text-[#32327B]">Lorem Ipsum</div>
                    <div className="font-bold text-[#32327B] text-[10px]">02/05/2021</div>
                    <div className="text-[9px] w-[144px] h-[44px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </div>
                    <div className="text-[10px] text-[#32327B]">Read more..</div>
                </div>
            </div>

        </a>
    )
};

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
                    <div className="w-full h-screen flex flex-col justify-center items-center content-around gap-[15px] p-10">
                        <div className="w-full h-full flex bg-[#FFFFFF] rounded-[20px] mt-auto mb-auto justify-center p-20">
                            <div className="flex flex-col md:flex-row justify-center items-center">
                                <div className="flex flex-col justify-center items-center w-3/4 gap-20">
                                    <div className="flex flex-col justify-center items-center gap-5 md:items-start">
                                        <div className="flex flex-col justify-center items-center -space-y-5 md:items-start md:px-8">
                                            <h1><span className="font-bold text-[#222253] text-[32px]  md:text-[64px] justify-center">Our Planned</span></h1>
                                            <h2><span className="font-bold text-[#222253] text-[56px] md:text-[96px]">Activities</span></h2>
                                        </div>
                                        <p><span className="flex font-bold text-[#222253] text-[13px] md:text-[20px] text-center md:text-justify md:font-medium px-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </span></p>
                                    </div>
                                    <button className="w-[138px] h-[42px] bg-[#F3BE00] rounded-[12px] flex justify-center items-center">
                                        <a href="">
                                            <span className=" text-[#3F3F9C] font-bold text-[15px]">Button Here</span>
                                        </a>
                                    </button>
                                </div>
                                <div className="hidden md:flex w-full h-full bg-[#D9D9D9] rounded-[20px] justify-center items-center">
                                    <h3 className="justify-center items-center"><span className="font-bold text-[20px]">Calender Here</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden flex w-full h-1/2 bg-[#D9D9D9] rounded-[20px] justify-center items-center">
                            <h3 className="justify-center items-center"><span className="font-bold text-[20px]">Calender Here</span></h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full h-[172px] flex flex-col bg-[#F3BE00] justify-center items-center text-center">
                        <h3><span className="font-bold text-[40px] text-[#212152]">Archived</span></h3>
                        <p><span className="font-medium text-[15px] text-[#3F3F9C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, </span></p>
                    </div>
                    <div className="relative w-ful h-[781px] items-center justify-center">
                        <Image
                            src={FotoAngkatan}
                            quality={100}
                            alt=""
                            fill
                            className="relative h-[781px] object-cover opacity-60"
                        />
                        <div className="absolute flex flex-row justify-center items-center left-1/2 -translate-x-1/2 -top-5">
                            <FindArticle />
                        </div>
                        <div className="absolute w-full p-14">
                            <div className="flex w-[12/13]  mx-auto h-[50.75px] bg-[#212152] rounded-t-[12px] justify-end items-center">
                                <div className="absolute -translate-x-3">
                                    <button className="w-[99px] h-[33.71px] bg-[#F3BE00] rounded-[10px] left-1/2">
                                        <div className="text-[#FFFFFF] text-[20px] font-bold -translate-x-2">2023</div>
                                        <Image src={DropDown} alt="" className="absolute right-0 -translate-x-3 -translate-y-[18px]" />
                                    </button>
                                </div>
                            </div>
                            <div className="w-[12/13] h-[651px] bg-white rounded-b-[12px] bg-blurBackground">
                                <div className=" flex flex-wrap gap-[20px] h-[650px] p-2 pt-5 justify-center overflow-scroll">
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />
                                    <GridComponent image={img_Hublu} divisi={"HUBLU"} />
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

