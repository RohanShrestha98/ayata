import React from 'react'
import { QuoteSvg,PumaSvg } from '../../assets/allSvg'
import Slider from 'react-slick';

export default function BestService() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const clientSliderList = [
        {id:1, title:"The best service in the market.", icon:<PumaSvg/> ,message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero etLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero etLorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {id:2, title:"The best service in the market.", icon:<PumaSvg/> ,message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero etLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero etLorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {id:3, title:"The best service in the market.", icon:<PumaSvg/> ,message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero etLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero etLorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {id:4, title:"The best service in the market.", icon:<PumaSvg/> ,message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero etLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero etLorem ipsum dolor sit amet, consectetur adipiscing elit."},
    ]
    return (
        <div className='text-[#FCFCFD] bg-[#1F1F1F] py-12 px-32'>
            <div className='absolute bottom-[200px]'>
                <QuoteSvg/>
            </div>
            <Slider {...settings}>
                {clientSliderList.map((item) => {
                    return(
                        <div key={item.id} className='flex flex-col px-36 text-center'>
                            <p className='text-xl font-medium uppercase'>{item.title}</p>
                            <p className='italic leading-8 my-4'>{item.message}</p>
                            <div className=' flex justify-center '>{item.icon}</div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}