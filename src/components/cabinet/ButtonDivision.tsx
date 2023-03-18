import Image from "next/image"
import { Lato } from "next/font/google"
import  PHPI from "./CarouselCabinet";

const lato = Lato({
  subsets: ['latin'],
  display:'optional',
  weight: '400'
});

export default function ButtonDivision() {
  return (
    <>
    {/* {PHPI.filter(e => ['psdma', 'hublu', 'mikat', 'kpm', 'po', 'kewirush'].includes(e['id'])).map((items : any,index : any) => {
      return (
        <div key={index} className={`flex m-4 ${lato.className}`}>
          <div className="group w-[80px] h-[80px] bg-[#3F3F9C] rounded-[21px] overflow-hidden ">
            <div className="flex flex-col justify-center items-center h-full transform group-hover:-translate-y-[2px] duration-200 ">
              <Image
                src={`/cabinet/division/${items.id}.svg`}
                alt={items.position}
                width={40}
                height={40}
                className="flex justify-center items-center group-hover:scale-90 transition-all duration-1000 ease-out"
              />
              <div className="absolute text-white text-sm font-bold bottom-0 invisible group-hover:visible group-hover:relative">
                <h1 className="duration-100 transition-opacity ease-in opacity-0 group-hover:opacity-100">
                  {items.id.toUpperCase()}
                </h1>
              </div>
            </div>
          </div>
        </div>        
      )
    })} */}


    </>
  )
}