import React from 'react'
import { GoDotFill } from "react-icons/go";

export default function KeyWords() {
        return (
            <div className='flex flex-col gap-4 justify-center items-center py-5 mb-32 lg:mb-10 text-xl md:text-lg sm:text-sm'>
                <p className='uppercase text-[#363F72] '>LearnVista</p>
                <div className=' flex gap-6'>
                    <p className='uppercase text-[#363F72] '>LearnVista</p>
                    <GoDotFill className='text-[#D9D9D9]'/>
                    <p className='uppercase text-[#363F72] '>EduSphere</p>
                    <GoDotFill className='text-[#D9D9D9]'/>
                    <p className='uppercase text-[#363F72] '>InsightQuest</p>
                </div>
                <div className=' flex gap-6'>
                    <p className='uppercase text-[#363F72] '>LearnVista</p>
                    <GoDotFill className='text-[#D9D9D9]'/>
                    <p className='uppercase text-[#363F72] '>VisualEdge</p>
                </div>
                <p className='uppercase text-[#363F72] '>MindMeld</p>
            </div>
        )
}
