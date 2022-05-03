import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

 
const Container=styled.div`
height:40vh;
width:100vw;
background-color:#87CEFF;  
height:80vh; 

`

const ContainerInput=styled.form`
height:14vh;
width:30vw;
display:flex;
justify-content:center;
align-items:center;
`

const Input=styled.input`
width:20vw;
height:7vh;
font-size:2vw;
`

const BoxBtn=styled.div`
width:20vw; 
height:13vh;
font-size:2vw;
 
display: flex;
justify-content:center;
align-items:center;
`
const Button =styled.button`
width:14vw;
font-size:2vw;
border-radius: 20% 0 20% 00%;
`
const PokeBox =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
justify-content:space-evenly;
border-radius: 30%;
width:40vw;
height:67vh;
position:absolute;
left:39.5%;
background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
top:30%;
`
const Name =styled.div` 
width:50%;
display:flex;
justify-content:center;
align-items:center;
`
const H1 =styled.h1`
font-size:3vw;
` 
const BoxImage =styled.div`
 
width:60%;
height:59%;
display:flex;
justify-content:center;
align-items:center;

` 
const Img =styled.img`
width:30vw;
` 
const BoxType =styled.div`
 
` 
const H3 =styled.h3`
font-size:2vw;
color:black;
` 
const BoxAbility=styled.div`
 
`  
const P =styled.p`
font-size:2vw;
` 
export default function Pokemon(){

    const [ pokefind , setPokeFind] = useState('')

    const [pokemon, setPokemon] = useState({
        name:'', 
        image:'',    
        type: '',
        ability: ''     
    })
 
    const findPokemon = (e)=>{
        e.preventDefault()
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokefind}`)
        .then( (response) => {
           console.log(pokefind)
           console.log(response)
           setPokemon({
            name:pokefind, 
            image: response.data.sprites.front_shiny, 
            type: response.data.types[0].type.name,
            ability: response.data.abilities[0].ability.name
             
        })
        } )
    }

    return(
        <Container>
        <form onSubmit={findPokemon}>
        <ContainerInput>
        <Input onChange={(e)  =>{setPokeFind(e.target.value.toLowerCase())}}/>
        </ContainerInput>
        <BoxBtn>
          <Button onClick={findPokemon}>Find Pokemon</Button>
        </BoxBtn>  
        </form>
        
       {!pokemon ? <h3>Não tem</h3> : (
           <>
            <PokeBox>
            <Name>
              <H1>{pokemon.name.toUpperCase()}</H1>  
            </Name>
            <BoxImage>
                <Img src={pokemon.image} />
            </BoxImage>
            <BoxType>
                <p>Type:</p>
                <H3>{pokemon.type} </H3>
            </BoxType>
            <BoxAbility>
            <p>Ability:</p>
                <P>{pokemon.ability} </P>
            </BoxAbility>
            
        </PokeBox>
           </>
       )}
        </Container>
        
    )
}