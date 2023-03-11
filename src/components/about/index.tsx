import Image from "next/image"
import { Lato } from "next/font/google"


export default function AboutPage(){
  return (
    <>
      <div className="flex flex-col lg:flex-row relative lg:justify-evenly xl:justify-between items-center px-10 pb-10 md:px-24 xl:py-20 xl:px-48 2xl:px-96 w-full h-[640px] md:h-[616px] bg-gradient-to-b from-[#F8F8F8] to-[#F8F8F8]/70 lg:to-transparent">
        <Image 
          quality={100}
          src={"/about/backgroundAbout.png"}
          fill={true}
          alt=""
          className="-z-[9999] hidden lg:block"
        />
        <Image 
          quality={100}
          src={"/about/backgroundAboutMobile.png"}
          fill={true}
          objectFit="contain"
          objectPosition="center bottom"
          alt=""
          className="-z-[9999] absolute -bottom-5 lg:hidden block opacity-50 "
        />
        <div className="md:w-5/6 lg:w-3/6 text-center">    
          <h1 className="font-bold text-[22px] lg:text-5xl xl:text-[52px] lg:text-start pt-[91px] md:pt-16 md:text-4xl">About Us</h1>
          <Image 
            quality={100}
            src="/about/logoHimakom.svg"
            alt="Logo Himakom"
            width="128"
            height="163"
            className="mt-8 lg:hidden md:w-[188px]  h-auto ml-auto mr-auto"
          />
          <p className="text-justify text-xs md:text-base lg:text-lg xl:text-2xl py-4 2xl:py-10 ">
              Himpunan Mahasiswa Ilmu Komputer (HIMAKOM) adalah asosiasi 
              mahasiswa Ilmu Komputer Universitas Gadjah Mada yang terbentuk sejak tahun 1998. 
              HIMAKOM menjadi wadah aspirasi seluruh mahasiswa Ilmu Komputer dan ikut berkontribusi 
              dalam kegiatan-kegiatan kampus yang bermanfaat seperti kegiatan sosial, kunjungan 
              industri, hingga seminar dan lomba tingkat nasional. Memiliki Badan Semi Otonom 
              bernama Omah TI yang berperan sebagai pusat pengembangan teknologi informasi bagi 
              mahasiswa Ilmu Komputer.
          </p>
        </div>
        <div>
          <Image 
            quality={100}
            src="/about/logoHimakom.svg"
            alt="Logo Himakom"
            width="234"
            height="299"
            className="mt-8 hidden lg:block xl:w-[280px]"
          />
        </div>
      </div>


      <div className="relative flex flex-col lg:flex-row justify-center items-center xl:items-start lg:justify-evenly xl:justify-between px-12 md:px-24 xl:px-48 2xl:px-96 xl:pt-20">
          <Image 
            src={"/about/backgroundVision.png"}
            fill={true}
            quality={100}
            alt=""
            className="-z-[9999]"
          />
          <Image 
            src={"/about/backgroundVisionMobile.png"}
            fill={true}
            quality={100}
            objectFit="cover"
            alt=""
            className="-z-[9999] lg:hidden"
          />
          <div className="lg:w-6/12 flex flex-col lg:justify-center xl:justify-start text-center lg:text-start">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-[52px] xl:text-6xl 2xl:text-[72px] pt-10">Vision</h1>
            <h2 className="lg:text-2xl xl:text-3xl md:text-xl 2xl:text-3xl py-4 2xl:py-12 xl:leading-10">
              Terwujudnya HIMAKOM sebagai ruang untuk berekspresi, 
              berinovasi agar tercipta lingkungan yang solid, dinamis, 
              serta inklusif
            </h2>
          </div>
          <div className="relative">
            <Image
              quality={100} 
              src={"/about/Kadek.png"}
              alt="Makomji"
              width="177"
              height="266"
              className="lg:w-[252px] lg:pt-24 h-auto xl:w-[378px] 2xl:w-[500px] xl:pt-0"
            />
          </div>
          <Image
            quality={100}
            src={"/about/visionDecoration.svg"}
            alt=""
            width={"103"}
            height="96"
            className="absolute bottom-0 left-0 md:w-[170px] xl:w-[255px] h-auto lg:hidden"
          />
          <Image
            quality={100}
            src={"/about/visionDecoration.svg"}
            alt=""
            width={"103"}
            height="96"
            className="absolute bottom-0 right-0 lg:right-0 lg:top-0 transform scale-x-[-1] lg:scale-x-[1] lg:rotate-180 md:w-[170px] xl:w-[255px] h-auto "
          />
      </div>
      <section className="relative md:px-24 xl:px-48 xl:pt-20 lg:flex 2xl:px-70 ">
        <Image 
          src={"/backgroundMission.png"}
          fill={true}
          quality={100}
          objectFit="cover"
          alt=""
          className="-z-[9999] bg-[#3F3F9B] hidden lg:block"
        />
        <Image 
          src={"/backgroundMissionMobile.png"}
          fill={true}
          quality={100}
          objectFit="cover"
          alt=""
          className="-z-[9999] bg-[#3F3F9B] lg:hidden"
        />
        <Image 
          src="/about/missionDecoration.svg"
          alt=""
          quality={100}
          width="103"
          height="96"
          className="bottom-0 right-0 rotate-180 lg:top-0 lg:left-0 lg:rotate-0 md:w-[170px] xl:w-[255px] h-auto absolute "
        />
        <Image 
          src="/about/missionDecoration.svg"
          alt=""
          quality={100}
          width="103"
          height="96"
          className="bottom-0 left-0 transform scale-x-[-1] rotate-180 md:w-[170px] xl:w-[255px] h-auto absolute lg:hidden"
        />
        <div className="relative flex flex-col justify-center items-center lg:items-end xl:items-stretch lg:flex-row xl:justify-between lg:justify-evenly w-full">
            <div className="relative flex items-end">
              <Image 
                src="/about/Kadek2.png"
                alt="Makomji"
                width="362"
                height="575"
                className="lg:w-[282px] xl:w-[378px] 2xl:w-[500px] h-auto xl:pt-0 hidden lg:block"
                objectPosition="bottom"
                quality={100}
              />
            </div>
          <div className="text-white xl:leading-7 flex flex-col items-center justify-start 2xl:justify-center lg:items-start lg:py-12 lg:ml-10 xl:py-0 lg:w-1/2 text-justify ">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-[48px] xl:text-6xl 2xl:text-[72px] pt-7">Mission</h1>
            <ul className="list-decimal text-xs lg:text-lg xl:text-2xl md:text-base md:w-2/3 lg:w-full font-medium pt-3 2xl:pt-8 xl:leading-9 px-[52px] md:px-0 2xl:pl-4">
              <li>
                Menciptakan lingkungan dengan suasana yang nyaman melalui 3S (Santai, Serius, Selesai)  
              </li>
              <li>
                Meningkatkan rasa kebersamaan, kepedulian, dan saling memiliki antar mahasiswa ilmu komputer 
              </li>
              <li>
                Menjalin kerjasama dan membangun relasi dengan berbagai pihak, baik internal maupun eksternal 
              </li>
              <li>
                Membangun koordinasi yang aktif dan berkesinambungan secara transparan dengan seluruh masyarakat HIMAKOM
              </li>
              <li>
                Mengoptimalkan minat, bakat, serta potensi yang dimiliki anggota HIMAKOM
              </li>
            </ul>
          </div>
            <div className="relative flex items-end">
              <Image 
                src="/about/Kadek2.png"
                alt="Makomji"
                width="177"
                height="241"
                className="lg:w-[252px] xl:w-[378px] h-auto xl:pt-0 lg:hidden"
                objectPosition="bottom"
                quality={100}
              />
            </div>
        </div>
      </section>

      <section className="h-full w-full xl:h-[720px] relative bg-gradient-to-b from-[#F8F8F8] to-[#F8F8F8]/10 lg:to-transparent">
        <Image 
          src={"/about/backgroundPrinciple.png"}
          fill={true}
          quality={100}
          objectFit={"cover"}
          objectPosition="center"
          alt=""
          className="-z-[9999]"
        />
        <Image 
          quality={100}
          src={"/about/principleDecorationMobile.svg"}
          alt=""
          width={"160"}
          height="133"
          className="absolute h-auto left-0 top-0 transform scale-x-[-1] md:hidden"
          />
        <Image 
          quality={100}
          src={"/about/principleDecorationMobile.svg"}
          alt=""
          width={"160"}
          height="133"
          className="absolute h-auto right-0 md:hidden"
        />
        <Image 
          quality={100}
          src={"/about/principleDecoration.svg"}
          alt=""
          width={"160"}
          height="133"
          className="absolute h-auto left-0 md:w-[330px] lg:w-[475px] xl:w-[550px] hidden md:block"
          />
        <Image 
          quality={100}
          src={"/about/principleDecoration.svg"}
          alt=""
          width={"160"}
          height="133"
          className="absolute h-auto right-0 md:w-[330px] lg:w-[475px] xl:w-[550px] transform scale-x-[-1] hidden md:block"
        />
        <div className="flex flex-col justify-center items-center h-full py-44">
          <div className="w-[235px] md:w-[485px] lg:w-auto xl:w-[1250px] lg:mx-32 xl:-mt-32 bg-white rounded-xl shadow-[0px_4px_16px_rgba(33,33,82,0.25)] ">
            <h1 className="text-center text-xl md:text-3xl xl:text-6xl font-bold py-6">Principle</h1>
            <p className="text-justify text-[10px] md:text-base xl:text-2xl font-medium px-10 pb-6">
              Himpunan Mahasiswa Ilmu Komputer Universitas Gadjah Mada atau HIMAKOM UGM memiliki tiga nilai 
              utama yang selalu dibawa dari tahun ke tahun, yakni Aspirasi, Inisiasi, dan Perwujudan. 
              Ketiga nilai tersebut menjadi sebuah pondasi dari berdirinya HIMAKOM UGM sebagai organisasi yang 
              utuh dan berdampak.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}