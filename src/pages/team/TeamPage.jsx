import React from 'react'
import SummeryPart from '../../components/SummeryPart'
import team from "../../assets/team.png";
import ExecutiveMembers from './ExecutiveMembers';

export default function TeamPage() {
    return (
        <div>
            <SummeryPart title1={"Meet the team of "} title2={"Ayata Incorporation"}
                className={"h-[50vh] w-[90%]"}
                message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et"}
            />
            <img src={team} alt="" />
            <ExecutiveMembers/>
        </div>
    )
}
