import Image from "next/image";
import { Lato } from "next/font/google"
import { useState } from "react";

const lato = Lato({
  subsets: ['latin'],
  display:'optional',
  weight: '400'
});

export const PHPI = [
  {
    "id": "makomji",
    "position": "Ketua Himakom",
    "name": "Kadek Ninda N.P" 
  },
  {
    "id": "ceo-oti",
    "position": "CEO OmahTI",
    "name": "Antonius Teddy K" 
  },
  {
    "id": "sekjen",
    "position": "Sekretaris Jendral",
    "name": "Diki Bagastama" 
  },
  {
    "id": "sekre",
    "position": "Sekretaris Umum",
    "name": "Maeve Zahwa A.C.K" 
  },
  {
    "id": "bendahara",
    "position": "Bendahara Umum",
    "name": "Fahdgham Albar R" 
  },
  {
    "id": "mka",
    "position": "Manajemen Kesekretariatan dan Alumni",
    "name": "Ronggo Tsani M" 
  },
  {
    "id": "psdma",
    "position": "Pengenbangan Sumber Daya Manusia dan Advokasi",
    "name": "Gelora Damayanti M" 
  },
  {
    "id": "hublu",
    "position": "Hubungan Luar",
    "name": "Rachel Naragifta" 
  },
  {
    "id": "mikat",
    "position": "Minat dan Bakat",
    "name": "Konang Tyagazain N" 
  },
  {
    "id": "kewirush",
    "position": "Kewirausahaan",
    "name": "Rhazes Wahyu R.S" 
  },
  {
    "id": "kpm",
    "position": "Kerumahtanggan dan Pengabdian Masyarakat",
    "name": "Billy Fahd Qodama" 
  },
  {
    "id": "po",
    "position": "Pengembangan Organisasi",
    "name": "Fadya Nabila F" 
  },
] 

export default function CarouselCabinet(){
  return (
    <>

    {PHPI.map(items => {
      return (
        <div className={`relative flex justify-center items-center mx-1 ${lato.className}`}>
          <div className="group relative w-[110px] h-[220px] lg:w-[180px] lg:h-[360px] bg-[#F8F8F8] overflow-hidden transform -skew-x-[6deg] rounded-md border-[5px] hover:w-[150px] lg:hover:w-[320px] transition-all hover:ease-in hover:duration-[100ms] hover:visible">
            <h1 className="skew-x-[8deg] text-center text-xs py-2 px-4 font-bold text-[#3F3F9C] h-[80px] transition-opacity group-hover:opacity-0 ease-out duration-400 lg:text-xl">{items.position}</h1>
            <h1 className="skew-x-[8deg] text-center text-xs py-2 px-4 font-bold text-[#3F3F9C] h-[80px] transition-opacity opacity-0 absolute top-0 left-[50] w-full group-hover:opacity-100 ease-in duration-400 lg:text-xl">{items.position}</h1>
            <div className="flex justify-center items-center h-[322px]">
              <Image 
                src={"/about/Kadek2.png"}
                quality={100}
                alt=""
                width={"122"}
                height="180"
                className="absolute group-hover:h-[180px] group-hover:w-auto bottom-0 filters group-hover:filter-none lg:w-[208px] lg:group-hover:h-[300px]"
              />
            </div>
            <div className="absolute w-[210px] h-[58px] bg-[#3F3F9C] text-[#F8F8F8] bottom-[0.5px] -left-[320px] group-hover:translate-x-[320px] duration-[300ms] lg:w-[310px] lg:h-[78px]">
                <div className="skew-x-[8deg] font-semibold text-xs leading-tight px-4 pt-4 pb-2 lg:text-2xl lg:pt-2 flex flex-col justify-center">
                  <h1 className="transition group-hover:ease-linear duration-200">{items.name}</h1>
                  <h2>2021</h2>
                </div>
            </div>
          </div>
        </div>
      )
    })}

    </>
  )
}
