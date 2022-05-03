import React from 'react'
import styled from 'styled-components'
import Pokemon from './Poke'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`


const Header=styled.div`
height:20vh;
width:100vw;
background-color:black;
color:white;
display:flex;
justify-content:center;
align-items: center;
`
const H1=styled.h1`
font-size:7vw;
font-family: 'Square Peg', cursive;
`
export default class PokeSrc extends React.Component{
  render(){
    return(
      <>
       <Header>
        <GlobalStyle/>
      <H1>Procure seu pokemón</H1>
      </Header>
      <Pokemon/>
      </>
     
    )
  }
}