import React from 'react'
import SummeryPart from '../../components/SummeryPart'
import BestService from './BestService'
import NationalClients from './NationalClients'

export default function ClientPage() {
    return (
        <div>
            <SummeryPart title1={"Our Trusted"} title2={"Partners"} 
                className={"h-[60vh]"}
                message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et"}
            />
            <BestService/>
            <NationalClients/>
        </div>
    )
}
