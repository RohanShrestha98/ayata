import React from 'react'

export default function ProductDescription({dark, isImage, image}) {
    return (
        <div className={`  flex flex-col gap-12 md:gap-8 ${!dark ? "px-32 xl:px-24 lg:px-16 ml:px-10 sm:px-4  py-[120px] lg:py-10  " : "px-0"}`} >
            <p className={`text-5xl ml:text-4xl md:text-3xl sm:text-2xl sm:text-center  font-medium leading-[57.6px] w-[77%] md:w-full ${dark? "text-[#EAECF5]" : "text-[#293056]"}`}>
                Revolutionizing Industries Through Innovative IT Solutions: Empowering Businesses to Thrive in the Digital Age.
            </p>
            {/* <div className='flex gap-20 ps-28'> */}
            <div className={`  ${!isImage? "flex justify-end ms-[40%] ml:ms-[20%] md:ms-0 " : "grid grid-cols-2 md:grid-cols-1 gap-20 lg:gap-5  ps-28 lg:ps-16 ml:ps-8 md:ps-0"}`} >
                {isImage &&
                    <div className='md:flex md:justify-center '>
                        <img src={image} alt=""  className=' object-cover md:flex md:justify-center '/>
                    </div>
                }
                <p className={` text-[15px] font-light leading-10 md:leading-loose sm:text-center  ${dark? "text-[#F2F4F7]" : "text-[#667085]"}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum libero et velit interdum, ac aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum  ac aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum
                </p>
            </div>
        </div>
    )
}
