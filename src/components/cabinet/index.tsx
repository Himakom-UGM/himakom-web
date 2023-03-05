import ButtonDivision from "./ButtonDivision"
import CarouselCabinet from "./CarouselCabinet"
import Image from "next/image"
import { Lato } from "next/font/google"
import { PHPI } from "./CarouselCabinet"

const lato = Lato({
  subsets: ['latin'],
  display:'optional',
  weight: '400'
});

function LegendStructure(){
  return(
    <>
      {PHPI.map((items,index) => {
        return (
          <div className="flex items-center pb-2 px-2 lg:pb-3"       key={index}>
            <Image
              src={`/cabinet/${items.id}.svg`}
              alt=""
              width={14}
              height={12}
              className="filter "
        
            />
            <h4 className="text-[10px] lg:text-xl font-bold text-start pl-3">{items.position}</h4>
          </div>
        )
      })}
    </>
  )
}

export default function CabinetPage(){


  return (
    <>
      <main className={`${lato.className} overflow-x-hidden`}>
        <div className="bg-[#3F3F9C]">
          <div className="relative  h-full z-0">
              <Image
                src={"/cabinet/cabinetBackground.svg"}
                alt=""
                quality={100}
                width="240"
                height="240"
                className=" absolute top-0 right-0 -z-[9999] xl:w-[350px]"
                />
              <Image
                src={"/cabinet/cabinetBackground2.svg"}
                alt=""
                quality={100}
                width="240"
                height="240"
                className=" absolute bottom-0 left-0 -z-[9999] xl:w-[350px]"
              />
            <div className="flex justify-center items-center z-1 pt-8 pb-32  xl:px-48 xl:py-44">
              <div className="bg-white h-full w-9/12 xl:w-full max-w-[1056px] rounded-3xl flex shadow-[0px_4px_16px_rgba(33,33,82,0.25)]">
                <div className=" hidden px-16 xl:flex items-center justify-center">
                  <Image
                    src={"/cabinet/logo-kabinet.svg"}
                    alt=""
                    quality={100}
                    width={1900}
                    height={245}
                  
                  />
                </div>
                <div className="">
                  <h1 className="text-xl text-center  font-bold p-6 xl:pb-2 xl:pt-12 xl:px-0 xl:text-start xl:text-5xl">Arundaya Cakrabuana</h1>
                  <h2 className="xl:text-2xl hidden lg:block font-semibold">Himakom Periode 2023/2024</h2>
                  <div className="flex justify-center items-center ">
                    <Image
                      src={"/cabinet/logo-kabinet.svg"}
                      alt=""
                      quality={100}
                      width="140"
                      height="130"
                      className="block xl:hidden"
                    />
                  </div>
                  <p className="text-[10px] font-medium text-justify p-6 xl:px-0 xl:text-xl xl:leading-6 xl:w-11/12 xl:py-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, 
                    dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem 
                    sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, 
                    sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia 
                    nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque 
                    ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur 
                    vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum 
                    tellus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="relative flex flex-col justify-start items-center h-auto z-0 pb-20">
            <Image
              src={"/cabinet/cabinetBGDecoration.svg"}
              alt=""
              quality={100}
              width="180"
              height="180"
              className=" absolute top-0 right-0 -z-[9999]"
              />
            <Image
              src={"/cabinet/cabinetBGDecoration2.svg"}
              alt=""
              quality={100}
              width="240"
              height="240"
              className=" absolute bottom-0 left-0 -z-[9999]"
            />
            <h1 className="bg-[#F8F8F8] py-3 px-[45px] rounded-3xl lg:bg-transparent lg:text-5xl lg:font-bold lg:shadow-none lg:my-14 shadow-[0px_4px_16px_rgba(33,33,82,0.25)] my-8 ">Cabinet Structure</h1>
            <Image
              src={"/cabinet/structureCabinet.svg"}
              alt=""
              quality={100}
              width="240"
              height="280"
              className="pb-11 lg:hidden"
            />
            <div className="text-[#3F3F9C] w-9/12 rounded-3xl border-2 shadow-[0px_4px_16px_rgba(33,33,82,0.25)] bg-[#F8F8F8] z-0 flex lg:justify-center">
              <Image
                src={"/cabinet/structureCabinet.svg"}
                alt=""
                quality={100}
                width="240"
                height="280"
                className="lg:block hidden w-[612px] px-14 py-[136px]"
              />
              <div className="flex flex-col lg:w-1/3 lg:py-10">
                <h3 className="text-xs font-bold text-center pt-3 pb-6 lg:text-2xl">Keterangan</h3>
                <div className="flex flex-col items-start pb-2 px-2 lg:text-xl border-l-4 border-[#3F3F9C] xl:pl-4">
                  <LegendStructure />
                </div>
              </div>
            </div>
          </div>
        <div className="relative h-[640px] bg-[#3F3F9C] flex flex-col justify-center items-center overflow-hidden">
          <Image
            src={"/cabinet/coreBackground.png"}
            alt=""
            quality={100}
            fill
            objectFit="contain"
            objectPosition="bottom"
            className="lg:hidden"
          />
          <Image
            src={"/cabinet/coreBackground2.png"}
            alt=""
            quality={100}
            fill
            objectFit="contain"
            objectPosition="right"
            className="absolute"
          />
          <div className="bg-[#3F3F9C]/50 w-full h-full z-20 absolute" style={{background:'linear-gradient(90deg, #3F3F9C 53.44%, rgba(63, 63, 156, 0.4) 100%)'}}></div>
          <h1 className="text-2xl font-bold text-[#F8F8F8] text-center pb-10 lg:text-5xl z-30">Core Team</h1>
          <div className="flex mx-[370px] p-4 w-full  z-30  overflow-hidden">
            <CarouselCabinet />
          </div>
        </div>  
        <div className="relative flex flex-col justify-center h-[640px]">  
          <Image
            src={"/cabinet/cabinetBGDecoration.svg"}
            alt=""
            quality={100}
            width="180"
            height="180"
            className=" absolute top-0 right-0 -z-[9999]"
            />
          <Image
            src={"/cabinet/cabinetBGDecoration2.svg"}
            alt=""
            quality={100}
            width="240"
            height="240"
            className=" absolute bottom-0 left-0 -z-[9999]"
          />
          <h1 className="text-3xl font-bold text-center mb-12">Divisions</h1>
          <div className="flex flex-row flex-wrap w-full justify-center items-center">
            <ButtonDivision />
          </div>
        </div>    
      </main>

    </>
  )
}