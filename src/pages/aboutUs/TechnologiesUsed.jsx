import React from 'react'
import Header from '../../components/Header'
import react from "../../assets/technologyUsed/react.png";
import technoUsed from "../../assets/TechnoUsed.png";
import technoUsed2 from "../../assets/technoUsed2.png";
import figma from "../../assets/technologyUsed/figma.png";
import python from "../../assets/technologyUsed/python.png";
import django from "../../assets/technologyUsed/django.png";
import adobe from "../../assets/technologyUsed/adobe.png";
import go from "../../assets/technologyUsed/go.png";
import html from "../../assets/technologyUsed/html.png";
import css from "../../assets/technologyUsed/css.png";
import flutter from "../../assets/technologyUsed/flutter.png";
import tech from "../../assets/technologyUsed/tech.png";


export default function TechnologiesUsed() {
    const technologyList = [
        react, figma, python, django, adobe, go, html, css, flutter, css, flutter,
    ]
    return (
        <div className='py-[120px] md:py-10 flex flex-col gap-10'>
            <Header title={"Technologies Used"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et"}
            />
            <div className='relative w-full'>
                <div className='lg:bg-[#22222A] lg:h-[700px] ml:h-[550px] md:h-[660px] sm:h-[750px]'>
                    <div className='lg:grid lg:grid-cols-2 md:grid-cols-1'>
                        <div className=' flex justify-center  md:hidden pt-60 lg:pt-0'>
                            <img className='absolute lg:static top-0 lg:h-[95%] lg:w-[75%]' src={tech} alt="" />
                        </div>
                        <img className='w-full xl:h-[800px] xg:h-[700px] lg:hidden' src={technoUsed} alt="" />
                        {/* <img className='w-full  hidden lg:flex' src={technoUsed2} alt="" /> */}
                        <p className='absolute lg:static leading-[57.6px] text-5xl xg:text-4xl md:text-3xl sm:text-2xl font-medium text-[#F8F9FC] w-[50%] lg:w-full md:text-center bottom-[30%] xl:bottom-[25%]   md:py-10 pl-32 xl:pl-24 lg:pl-0  md:px-10 sm:px-4 '>
                            Cutting edge technologies
                            <span className='text-[#9EA5D1]'> to meet the industry standard and keep up the pace with</span>  modern world.
                        </p>
                    </div>
                    <div className='absolute lg:static flex justify-center  gap-5 bottom-[2%] md:bottom-[10%] flex-wrap px-32  xl:px-24 lg:px-16 ml:px-10 sm:px-4 '> 
                        {technologyList.map((items) => {
                            return(
                                <div>
                                    <img src={items} alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
