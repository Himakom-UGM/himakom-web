import Head from "next/head";
import Image from "next/image"
import FotoAngkatan from "public/images/bg/foto_angkatan.png"
import TextureEvent from "public/images/bg/texture_page_events.png"
import Pattern from "public/images/bg/patternpad.png"
import DropDown from "public/images/icon/dropDown.svg";
import FindArticle from "src/components/detail-post/Searchbutton"
import img_Mikat from "public/images/bg/Image_Mikat.png"
import img_KPM from "public/images/bg/image_KPM.png"
import img_Hublu from "public/images/bg/image_Hublu.png"
import img_PO from "public/images/bg/image_PO.png"
import type { StaticImageData } from 'next/image'
import React from "react";
import {BiChevronDown} from "react-icons/bi"

interface GridComponentProps {
    image: string | StaticImageData;
    divisi: string;

}

const GridComponent = ({ image, divisi }: GridComponentProps) => {
    return (
        <a href="" >
            <div className="flex w-[264px] h-[139px] bg-[#FFFFFF] rounded-[10px] md:h-[386px] md:w-[285px]">
                <div className="flex flex-row md:flex-col">
                    <div className="w-full justify-center items-center">
                        <Image src={image} quality={100} alt="hero" className="md:hidden rounded-l-[10px] w-[108px] h-[139px] object-cover md:w-[285px] md:h-[182px]"
                        />
                        <Image src={image} quality={100} alt="hero" className="hidden md:flex w-[108px] h-[139px] object-cover md:w-[285px] md:h-[182px] rounded-t-[10px]" />
                        <div className="md:hidden flex w-[56px] h-[16px] bg-[#F3BE00] justify-center items-center -translate-y-7 translate-x-9 rounded-[20px]">
                            <span className="text-[#FFFFFF] font-bold text-[10px] md:text-[12px]">{divisi}</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center translate-x-2 md:p-3">
                        <div className="flex flex-col -space-y-1">
                            <div className="flex flex-row ">
                                <div className="font-bold text-[16px] text-[#32327B] md:text-[24px]">Lorem Ipsum</div>
                                <div className="hidden md:flex bg-[#F3BE00] justify-center items-center rounded-[20px] w-[79px] h-[22px] translate-x-4 translate-y-2">
                                    <span className="text-[#FFFFFF] font-bold text-[10px] md:text-[12px]">{divisi}</span>
                                </div>
                            </div>
                            <div className="font-bold text-[#32327B] text-[10px] md:text-[12px]">02/05/2021</div>
                        </div>
                        <div className="flex flex-col md:gap-4">
                            <div className="text-[9px] md:text-[12px] w-[144px] h-[44px] md:w-[257px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </div>
                            <div className="flex h-5"></div>
                            <div className="text-[10px] md:text-[12px] text-[#32327B]">Read more..</div>
                        </div>
                    </div>
                </div>
            </div>
        </a >
    )
};

// const [isOpen, setIsOpen] = useState(false);
// return (

// )

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
                        className="-z-[99] object-cover"
                    />
                    <div className="w-full h-screen flex flex-col justify-center items-center content-around gap-[15px] p-10">
                        <div className="w-full h-full flex bg-[#FFFFFF] rounded-[20px] justify-center md:p-20">
                            <div className="flex flex-col md:flex-row justify-center items-center">
                                <div className="flex flex-col justify-center items-center w-3/4 gap-20 md:items-start md:px-8">
                                    <div className="flex flex-col justify-center items-center gap-5 md:items-start">
                                        <div className="flex flex-col justify-center items-center -space-y-5 md:items-start">
                                            <h1><span className="font-bold text-[#222253] text-[32px]  md:text-[64px] justify-center">Our Planned</span></h1>
                                            <h2><span className="font-bold text-[#222253] text-[56px] md:text-[96px]">Activities</span></h2>
                                        </div>
                                        <p><span className="flex font-bold text-[#222253] text-[13px] md:text-[20px] text-center md:text-justify md:font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </span></p>
                                    </div>
                                    <a href="">
                                        <button className="w-[138px] h-[42px] bg-[#F3BE00] rounded-[12px] flex justify-center items-center md:w-[185px] md:h-[56px] md:text-[20px]">
                                            <span className=" text-[#3F3F9C] font-bold text-[18px]">Button Here</span>
                                        </button>
                                    </a>
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
                    <div className="w-full h-[172px] md:h-[275px] flex flex-col bg-[#F3BE00] justify-center items-center text-center ">
                        <h3><span className="font-bold text-[40px] text-[#212152] md:text-[64px]">Archived</span></h3>
                        <p className="w-[278px] md:w-[592px]"><span className="font-medium text-[15px] md:text-[20px] text-[#3F3F9C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, </span></p>
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
                            <div className="flex w-[12/13]  mx-auto h-[50.75px] md:h-[100px] bg-[#212152] rounded-t-[12px] justify-end items-center">
                                <div className="absolute z-[100] -translate-x-3">
                                    <button className="hidden md:flex flex-row h-[65px] w-[137px] bg-[#F3BE00] left-1/2 rounded-[19px]">
                                        <div className="text-[#FFFFFF] text-[46px] font-bold translate-x-5">2023</div>
                                        <Image src={DropDown} alt="" className="hidden md:absolute right-0 -translate-x-3 top-1/2 -translate-y-1" />
                                    </button>
                                    <button className="md:hidden flex w-[99px] h-[33.71px] bg-[#F3BE00] rounded-[10px] left-1/2">
                                        <div className="text-[#FFFFFF] text-[20px] font-bold translate-x-5 ">2023</div>
                                        <Image src={DropDown} alt="" className="md:hidden absolute right-0 -translate-x-3 top-1/2 -translate-y-1" />
                                    </button>
                                    <div className="md:hidden absolute w-[99px] h-[208px] bg-[#F3BE00] rounded-[10px] right-0 py-4">
                                        <div className="flex flex-col overflow-scroll h-[208px] justify-center items-cente gap-2">
                                            <a href="" className="flex w-full text-[20px] font-bold text-[#FFFFFF] hover:bg-[#212152] justify-center items-center">2017</a>
                                            <a href="" className="flex w-full text-[20px] font-bold text-[#FFFFFF] hover:bg-[#212152] justify-center items-center">2018</a>
                                            <a href="" className="flex w-full text-[20px] font-bold text-[#FFFFFF] hover:bg-[#212152] justify-center items-center">2019</a>
                                            <a href="" className="flex w-full text-[20px] font-bold text-[#FFFFFF] hover:bg-[#212152] justify-center items-center">2020</a>
                                            <a href="" className="flex w-full text-[20px] font-bold text-[#FFFFFF] hover:bg-[#212152] justify-center items-center">2021</a>
                                            <a href="" className="flex w-full text-[20px] font-bold text-[#FFFFFF] hover:bg-[#212152] justify-center items-center">2022</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="w-[12/13] h-[651px] md:h-[580px] bg-white rounded-b-[12px] bg-blurBackground">
                                <div className="flex flex-wrap gap-[20px] h-[651px] md:h-[580px] p-2 pt-5 justify-center overflow-auto md:justify-between md:px-12">
                                    <GridComponent image={img_Mikat} divisi={"MIKAT"} />
                                    <GridComponent image={img_Hublu} divisi={"HUBLU"} />
                                    <GridComponent image={img_KPM} divisi={"KPM"} />
                                    <GridComponent image={img_PO} divisi={"PO"} />
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

                            </div> */}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

