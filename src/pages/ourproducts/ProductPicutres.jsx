import React from 'react'
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import productBg from "../../assets/productBg.png";

export default function ProductPicutres() {
    return (
        <div className='mt-14 ml:hidden'>
            <div className='flex relative items-center'>
                <img className='absolute left-0  md:h-[300px]' src={product1} alt="" />
                <img className=' absolute xg:hidden left-[35%] xl:left-[32%]' src={product2} alt="" />
                <img className=' absolute right-0 md:h-[200px]' src={product3} alt="" />
            </div>
            <img src={productBg} className='w-full object-cover mt-20 lg:mt-32' alt="" />
            <div className='flex justify-center -mt-60 xg:-mt-32 pb-10'>     
                <p className='text-[#98A2B3] text-xs '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et
                </p>
            </div>
        </div>
    )
}
