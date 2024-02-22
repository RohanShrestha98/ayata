import React from 'react'
import aboutUs from "../../assets/aboutUs.png";
import pic1 from "../../assets/About-us/pic1.png";
import pic2 from "../../assets/About-us/pic2.png";
import pic3 from "../../assets/About-us/pic3.png";
import pic4 from "../../assets/About-us/pic4.png";

export default function WhatWeDo() {
    const whatWeDoList = [
        {id:1, num:1, title: "Web Application"},
        {id:2, num:2, title: "Mobile Application"},
        {id:3, num:3, title: "Product Design"},
    ]
    const imgList = [
        pic1, pic2, pic3, pic4,
    ]
    return (
        <div className='flex md:flex-col py-[120px] md:py-10 md:gap-10 px-32 xl:px-24 lg:px-16 ml:px-10 sm:px-4 '>
            <div className='w-[60%] md:w-full flex flex-col gap-6 pe-20'>
                <p className='text-[#667085]'>What we do</p>
                <div className='flex flex-col gap-6'>
                    {
                        whatWeDoList.map((item) => {
                            return(
                                <div key={item.id} className='flex items-center gap-4'>
                                    <p className='text-xl md:text-lg sm:text-base text-[#293056] border-2 font-semibold border-[#293056] rounded-full py-1 px-[14px]'>{item.num}</p>
                                    <div className='border-[#E6E6E6] border w-full'></div>
                                    <p className='text-4xl md:text-3xl sm:text-2xl font-semibold whitespace-nowrap text-[#293056]'>{item.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='md:hidden'><img src={aboutUs} alt="" /></div>
            <div className='md:grid md:grid-cols-4 sm:grid-cols-2 gap-3 hidden '>
                {imgList.map((item) => {
                    return(
                        <div className=''>
                            <img src={item} className='h-full w-full object-cover' alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
