import React from 'react'
import SummeryPart from '../../components/SummeryPart'
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";

export default function NationalProjects() {
    const clientImgList = [
        client1, client2, client3, client4
    ]
    return (
        <div className='flex gap-5 px-32 pb-28'>
            <div className='flex flex-col gap-[18px]'>
                <div className=" flex flex-col gap-6 h-[240px]">
                    <h1 className="text-[#293056] font-bold leading-snug text-4xl">
                        Major National <br/> Projects
                    </h1>
                    <p className="text-[#667085] leading-normal w-[85%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>
                </div>
                <img className='rounded-lg h-[240px] object-cover' src={client3} alt="" />
            </div>
            <div className='grid grid-cols-2 gap-[18px]'>
                {clientImgList.map((item) => {
                    return(
                        <img className='rounded-lg h-[240px] object-cover' src={item} alt="" />
                    )
                })}
            </div>
        </div>
    )
}
