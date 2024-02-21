import React from 'react'
import product4 from "../../assets/product4.png";

export default function Revolution() {
    return (
        <div className=' px-32 flex flex-col gap-12 pb-[120px]'>
            <p className='text-5xl text-[#293056] font-medium leading-[57.6px] w-[77%]'>
                Revolutionizing Industries Through Innovative IT Solutions: Empowering Businesses to Thrive in the Digital Age.
            </p>
            <div className='flex gap-20 ps-28'>
                <img src={product4} alt=""  className='w-[280px] h-[303px]'/>
                <p className='text-[#667085] text-[15px] font-light leading-10 w-[80%]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum libero et velit interdum, ac aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum  ac aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum
                </p>
            </div>
        </div>
    )
}
