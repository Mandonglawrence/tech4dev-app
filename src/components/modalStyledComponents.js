import styled from "styled-components";
import {MdClose} from 'react-icons/md';

export const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
`;

export const TriggerButton = styled.button`
min-width:100px;
padding: 16px 32px;
border-radius:4px;
border:none;
outline:none;
background:#141414;
color:#fff;
font-size:24px;
cursor:pointer; 
&:hover{
    background:green;
    transition:all linear .5s;
}
`;
export const Background = styled.div`
width:100%;
height:100%;
background:rgba(0,0,0,0.8);
position:fixed;
display:flex;
justify-content:center;
align-items:center;
z-index:20;
top:-5rem;
/* right:-8rem; */
`;
export const ModalWrapper = styled.div`
width:600px;
height:500px;
box-shadow:0 5px 16px rgba(0,0,0,0.2);
background:rgba(255,255,255,1);
color:#000;
position:relative;
display:flex;
justify-content:center;
flex-direction:column;
z-index:1000;
border-radius:10px;
top:3rem;
@media (max-width: 768px) {
width:350px;
  }
`;

export const CloseModalButton = styled(MdClose)`
cursor: pointer;
position:absolute;
top:20px;
right:20px;
width:32px;
height:32px;
padding:0;
z-index:10;
&:hover{
    color:red;
    transition:all linear .4s;
}
`;
export const ModalContent = styled.div`
display:flex;
justify-content:center;
color:#141414;
width:100%;
height:100%;
`;