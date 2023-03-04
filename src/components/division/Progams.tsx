import React from 'react'
import Image from 'next/image';


const Progams = () =>{
    return (
        <div className=" relative bg-[url('/bg_devision_white.png')] w-[1440] h-screen bg-center bg-cover">
            <h1 className=" flex text-4xl font-bold justify-center mb-20 pt-20">Our Programs</h1>

            <div className='flex justify-center  '>
            <div className='mx-120 flex flex-col justify-center'>
                    <div>
                        <ul className='h-80 pl-[20px] pr-[20px] flex flex-col gap-2 overflow-x-auto rounded-lg w-[600px] overflow-scroll '>
                            <li className="p-2 bg-yellow-200 hover:bg-blue-600 hover:text-blue-200">
                            List Item 1
                            </li>
                            <li className="p-2 bg-yellow-200 hover:bg-blue-600 hover:text-blue-200">
                            List Item 2
                            </li>
                            <li className="p-2 bg-yellow-200 hover:bg-blue-600 hover:text-blue-200">
                            List Item 3
                            </li>
                            <li className="p-3 bg-yellow-200 hover:bg-blue-600 hover:text-blue-200">
                            List Item 4
                            </li>
                            <li className="p-3 bg-yellow-200 hover:bg-blue-600 hover:text-blue-200">
                            List Item 4
                            </li>
                            <li className="p-3 bg-yellow-200 hover:bg-blue-600 hover:text-blue-200">
                            List Item 4
                            </li>
                            <li className="p-3 bg-yellow-200 hover:bg-blue-600 hover:text-blue-200">
                            List Item 4
                            </li>
                            <li className="p-3 bg-yellow-200 hover:bg-blue-600 hover:text-blue-200">
                            List Item 4
                            </li>
                        </ul>
                    </div>
                </div>
                
                    {/* picture */}
                <div className="max-w-2xl rounded-xl shadow-lg ml-80 min-w-[300px]">
                        <Image src="/progams.png"
                        height={300}
                        width={634}
                        alt = "Programs"
                        className='w-full'></Image>
                <div className='p-4'>
                    <div className='title-font text-lg font-medium mb-2'>
                        <a href="#" className='no-underline text-gray-500'>
                            kevin
                        </a>
                    </div>
                        <p className='text-base'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate tempore animi nam.
                        </p>
                    <span className='tracking-widest text-xs title-font font-medium text-gray-600 mb-1'>
                            HAI
                    </span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Progams;

