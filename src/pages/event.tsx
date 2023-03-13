import Head from "next/head";
import Image from "next/image"
import FotoAngkatan from "public/images/bg/foto_angkatan.png"
import Pattern from "public/images/bg/patternpad.png"
import img_Mikat from "public/images/bg/Image_Mikat.png"
import img_KPM from "public/images/bg/image_KPM.png"
import img_Hublu from "public/images/bg/image_Hublu.png"
import img_PO from "public/images/bg/image_PO.png"
import type { StaticImageData } from 'next/image'
import React, { SVGProps } from "react";
import Link from "next/link"
import { Menu, Transition, Listbox } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import {useEffect, KeyboardEvent } from 'react';
import buttonStyle from 'src/styles/searchComponent.module.scss'

interface GridComponentProps {
    image: string | StaticImageData;
    divisi: string;
    content: string;
}

const GridComponent = ({ image, divisi, content }: GridComponentProps) => {
    return (
        <Link href={content} >
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
        </Link >
    )
};

const FindArticle = ()  => {

    //Functions to enter input value on press enter
    const [inputValue, setInputValue] = useState("");
  
    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        console.log(inputValue);
        setInputValue('');
      }
    };
  
    return (
        <>
        <div className={buttonStyle.search}>
          <form >
            <input 
            type="text" 
            placeholder='Find Other Article'
            id="search-input"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyPress={handleKeyPress}
            />
            <Image src='search_icon.svg' alt='search icon' width='30' height='30' className={buttonStyle.search_icon}/>
          </form>
        </div>
        
        </>
    );
  }


const yearContent = [
    { year: '2023' },
    { year: '2022' },
    { year: '2021' },
    { year: '2020' },
    { year: '2019' },
]
interface YearDropDownProps {
    year: string;
    link: string;
}

const DropDown = () => {
    const [selected, setSelected] = useState(yearContent[0])
    return (
        <div className="relative inline-block text-left z-10 -translate-x-3">
            <Listbox value={selected} onChange={setSelected}>
                <div className="lg:hidden relative mt-1">
                    <Listbox.Button className="relative w-[99px] h-[33.71px]  cursor-default rounded-[10px] bg-[#F3BE00] text-left ">
                        <span className="block truncate text-[#FFFFFF] font-bold translate-x-3">{selected.year}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDownIcon
                                className="h-5 w-5 text-[#FFFFFF]"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-[10px]  bg-[#F3BE00] py-1 text-base shadow-lg ring-1  ring-opacity-5 focus:outline-none">
                            {yearContent.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-3 pr-4 ${active ? 'bg-[#212152] text-[#FFFFFF]' : 'text-[#FFFFFF]'
                                        }`
                                    }
                                    value={person}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-bold text-[20px]' : 'font-bold text-[20px]'
                                                    }`}
                                            >
                                                {person.year}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <CheckIcon className="h-4 w-4 text-[#FFFFFF]" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
};



export default function Event() {
    return (
        <>
            <Head>
                <title>Event</title>
            </Head>
            <main>
                <div className="w-full flex-wrap relative pt-10">
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
                <div className="relative w-full h-[172px] md:h-[275px] flex flex-col bg-[#F3BE00] justify-center items-center text-center ">
                    <h3><span className="font-bold text-[40px] text-[#212152] md:text-[64px]">Archived</span></h3>
                    <p className="w-[278px] md:w-[592px]"><span className="font-medium text-[15px] md:text-[20px] text-[#3F3F9C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, </span></p>
                    <div className="absolute flex flex-row justify-center items-center bottom-0 translate-y-1/2 z-10">
                        <FindArticle />
                    </div>
                </div>
                <div className="absolute w-full p-14">
                    <div className="flex w-[12/13]  mx-auto h-[50.75px] md:h-[100px] bg-[#212152] rounded-t-[12px] justify-end items-center">
                            <DropDown />
                    </div>
                    <div className="w-[12/13] h-[651px] md:h-[580px] bg-[#FFFFFF] rounded-b-[12px] bg-blurBackground">
                        <div className="flex flex-wrap gap-[20px] h-[651px] md:h-[580px] p-2 pt-5 justify-center overflow-auto md:justify-between md:px-12 z-[0]">
                            <GridComponent image={img_Mikat} divisi={"MIKAT"} content="" />
                            <GridComponent image={img_Hublu} divisi={"HUBLU"} content="" />
                            <GridComponent image={img_KPM} divisi={"KPM"} content="" />
                            <GridComponent image={img_PO} divisi={"PO"} content="" />
                            <GridComponent image={img_Mikat} divisi={"MIKAT"} content="" />
                            <GridComponent image={img_Mikat} divisi={"MIKAT"} content="" />
                            <GridComponent image={img_Mikat} divisi={"MIKAT"} content="" />
                            <GridComponent image={img_Mikat} divisi={"MIKAT"} content="" />
                            <GridComponent image={img_Mikat} divisi={"MIKAT"} content="" />
                            <GridComponent image={img_Mikat} divisi={"MIKAT"} content="" />
                            <GridComponent image={img_Mikat} divisi={"MIKAT"} content="" />
                            <GridComponent image={img_Mikat} divisi={"MIKAT"} content="" />
                            <GridComponent image={img_Mikat} divisi={"MIKAT"} content="" />
                            <GridComponent image={img_Mikat} divisi={"MIKAT"} content="" />
                            <GridComponent image={img_Mikat} divisi={"MIKAT"} content="" />
                            <GridComponent image={img_Mikat} divisi={"MIKAT"} content="" />
                            <GridComponent image={img_Mikat} divisi={"MIKAT"} content="" />
                            <GridComponent image={img_Mikat} divisi={"MIKAT"} content="" />
                            <GridComponent image={img_Mikat} divisi={"MIKAT"} content="" />
                            <GridComponent image={img_Mikat} divisi={"MIKAT"} content="" />
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[781px] items-center justify-center -z-10">
                    <Image
                        src={FotoAngkatan}
                        quality={100}
                        alt=""
                        fill
                        className="relative h-[781px] object-cover opacity-60"
                    />
                </div>
            </main>
        </>
    );
}