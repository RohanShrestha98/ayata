import React from 'react'
import aboutUs1 from "../../assets/aboutUs1.png";
import aboutUs2 from "../../assets/aboutUs2.png";

export default function FutureTechnology() {
    return (
        <div className='py-[120px] md:py-10 px-32 xl:px-24 lg:px-16 ml:px-10 sm:px-4  flex flex-col gap-20 md:gap-10'>
            <div className='flex justify-center'>    
                <p className='text-5xl lg:4xl md:text-3xl sm:text-2xl font-medium text-[#293056] leading-[57.6px] text-center w-[80%] md:w-full'>
                    Building a Future where  
                    <span className='text-[#4E5BA6]'> Technology Transforms Lives</span>
                    : Pioneering Solutions that Inspire Progress and Connectivity.
                </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-1 gap-10'>
                <p className='text-[#667085] text-[15px] font-light leading-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum libero et velit interdum, ac aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum  ac aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
                </p>
                <div className='md:flex md:justify-center'>
                    <img src={aboutUs1} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-1 gap-10'>
                <img src={aboutUs2} className='md:w-full md:order-last md:rounded-full' alt="" />
                <div className='flex flex-col gap-4'>
                    <p className='text-[#4E5BA6] font-medium'>Our Goals</p>
                    <p className='text-[#667085] text-[15px] font-light leading-10'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum libero et velit interdum, ac aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum  ac aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.                
                    </p>
                </div>
            </div>
        </div>
    )
}
