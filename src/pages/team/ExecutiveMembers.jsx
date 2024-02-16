import React from 'react'
import Header from '../../components/Header'
import { LinkedInSvg, TwitterSvg, FacebookSvg, InstagramSvg, GithubSvg } from '../../assets/allSvg'

export default function ExecutiveMembers() {
    const socialLinkList = [
        LinkedInSvg, TwitterSvg, FacebookSvg, InstagramSvg, GithubSvg
    ]
    return (
        <div className='py-28'>
            <Header 
                title={"Executive Members"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et"}
            />
            <div className='flex gap-10'>
                <img src="" alt="" />
                <div className='flex flex-col'>
                    <div className='flex flex-col gap-3'> 
                        <p className='text-[#475467] font-semibold '>Abishek Mahat</p>
                        <p className='text-[#98A2B3] text-sm'>CEO</p>
                        <div className='flex gap-2 '>
                            {socialLinkList.map((item) => {
                                return(
                                    <p className='text-gray-400'>{item}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
