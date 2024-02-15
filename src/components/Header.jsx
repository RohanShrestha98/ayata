import React from 'react'

export default function Header({title, description}) {
    return (
        <div className='flex flex-col gap-4 justify-center items-center  '>
            <h1 className="font-medium text-5xl text-[#293056]">{title}</h1>
            <p className="text-[#667085]  text-center leading-8 font-normal w-[40%] ">
                {description}
            </p>
        </div>
    )
}