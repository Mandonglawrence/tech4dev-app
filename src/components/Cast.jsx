import React from 'react'
import {CardContainer, CastCard, CastPicture, CastInfo} from '../components/cardStyledComponent.js'
import  lighthouse from '../assets/lighthouse.jpg'


export default function Cast({activeCast}) {
    return (
        <CardContainer>
       <CastCard>
         <CastPicture src={lighthouse} alt='CastPhoto'/>
         <CastInfo>
           <h2>Name: {activeCast.name}</h2> 
           <h2>Gender : {activeCast.gender}</h2> 
           <h2>Height : {activeCast.height}</h2> 
         </CastInfo>
       </CastCard>
       </CardContainer>
    )
}
