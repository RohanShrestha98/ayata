import React from 'react'
import SummeryPart from '../../components/SummeryPart'
import team from "../../assets/team.png";
import Quoted from './Quoted';
import AyataInc from './AyataInc';
import WhatWeDo from './WhatWeDo';
import Revolutionizing from './Revolutionizing';
import NumbersAchieved from './NumbersAchieved';
import FutureTechnology from './FutureTechnology';
import BOD from './BOD';


export default function AboutUsPage() {
    return (
        <div>
            <SummeryPart aboutUs className={"text-[40px] h-[50%] pt-16 py-5"} title1={"Tech Solutions with a Personal Touch: Crafting Your Digital Success Story"}/>
            <img src={team} className="w-full  h-[480px] object-cover" alt="" />
            <Quoted/>
            <AyataInc/>
            <WhatWeDo/>
            <Revolutionizing/>
            <NumbersAchieved/>
            <FutureTechnology/>
            <BOD/>
        </div>
    )
}
