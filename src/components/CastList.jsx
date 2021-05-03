import React,{useEffect,useState} from 'react'
import Cast from '../components/Cast'
import {Background,ModalContent,ModalWrapper,CloseModalButton} from '../components/modalStyledComponents'
import {CastListWrapper,CastListParent,CastListItem, CastListTitle} from '../components/cardStyledComponent.js'
import {BeatLoader} from 'react-spinners'

export default function CastList() {
    const [cast, setCast] = useState([]);
    const [displayModal, setDisplayModal] = useState(false);
    const [clickedCast, setClickedCast] = useState({})
    const getCastList = (url)=>{
       fetch(url)
       .then(res=> res.json())
       .then(({results})=>{
           setCast(results);
           return results;
       }
       )
       .catch(err=>console.error(err))
    }
    // useEffect(()=>{
        getCastList('https://swapi.dev/api/people/');
    // },[])

    class User {
        constructor(name,gender,height){
                this.name = name;
                this.gender = gender;
                this.height = height;
        }
        getCastDetails(){
            return{
                name:this.name,
                gender: this.gender,
                height:this.height
            }
        }
    }

    return (
            <CastListWrapper>
                                <CastListTitle>STAR WARS CHARACTER</CastListTitle>

                {cast? ( <CastListParent>
                {cast.map((actor,pos)=> (<CastListItem key = {pos}>
                    <h1 className="actor-name" onClick={(e)=>{
                      for(let person of cast){
                        if(person.name === e.target.textContent){
                            const currentCast =  new User(person.name,person.gender,person.height);
                            setClickedCast(prev=> ({...prev,...currentCast.getCastDetails()}))
                            setDisplayModal(true)
                            
                        } 
                    }
                }}>
                    {
                    actor.name
                    }
                    </h1>
                    </CastListItem>))}
                    {displayModal? (
                    <Background>
                        <ModalWrapper>
                            <ModalContent>
                                <CloseModalButton onClick={()=>{
                                    setDisplayModal(false);
                                }}></CloseModalButton>
                            <Cast activeCast={clickedCast}/>
                            </ModalContent>
                        </ModalWrapper>
                    </Background>):''}
              </CastListParent>):(
                  <div className="fallback" style={{
                      display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'column',
                    }}>
                  <h1>loading...</h1>
              <BeatLoader color='yellowgreen' size = {100}/>
                  </div>
              )}
           
            </CastListWrapper>
        
    )
}
