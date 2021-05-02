import styled from "styled-components";
import starwars from '../assets/starwars.jpg'
export const CardContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100%;
`; 
export const CastCard = styled.div`
display:flex;
padding:50px 60px;
flex-direction:column;
width:100%;
height:100%;
justify-content:center;
align-items:center;
`; 
export const CastInfo = styled.div`
`; 
export const CastPicture = styled.img`
height:250px;
width:300px;
`; 
export const CastListWrapper = styled.div`
box-sizing:border-box;
display:flex;
align-items:center;
justify-content:center;
background:blue;

`; 
export const CastListParent = styled.div`
display:flex;
/* width:100%; */
flex-wrap:wrap;
background:yellow;
align-items:center;
justify-content:center;
list-style:none;
box-sizing:border-box;
`; 
export const CastListItem = styled.div`
display:flex;
width:300px;
background:green;
margin:5px;
height:200px;
justify-content:center;
align-items:center;
background-image:url(${starwars});
background-size:contain;
list-style:none;
.actor-name{
    color:#fff;
    background-color:rgba(0,0,0,0.8);
    width:100%;
    text-align:center;
    cursor: pointer;
    list-style:none;
}
`; 
