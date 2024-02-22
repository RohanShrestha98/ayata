import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";


export default function Quoted() {
    return (
        <div className='h-[54vh] relative md:h-full  flex flex-col  items-center justify-center md:py-10 px-32 xl:px-24 lg:px-16 ml:px-10 sm:px-4'>
            {/* <FaQuoteLeft className='text-[#475467] h-6 w-8'/> */}
            <h1 className="text-[200px] absolute md:text-[160px]  sm:text-[100px] text-center whitespace-nowrap text-[#F7F7F7E5]">
                Ayata Inc.
            </h1>
            <div className=' z-10 text-[#667085] text-[15px] leading-8 text-center w-[45%] ml:w-[80%] md:w-[90%] flex flex-col gap-7 md:gap-5'>
                <div className='flex justify-center'>
                    <FaQuoteLeft className='text-[#475467]  h-6 w-8  '/>
                </div>
                <p className='md:text-sm md:leading-loose'> “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum libero et velit interdum, ac aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum”</p>
                <div>
                    <p className='uppercase text-[#475467] font-semibold'>Abishek Mahat</p>
                    <p>CEO</p>
                </div>
            </div>
        </div>
    )
}
