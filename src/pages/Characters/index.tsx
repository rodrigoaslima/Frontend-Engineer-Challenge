import { useContext, useEffect, useState } from "react"
import { MarvelContext } from "../../MarvelContext"

import captainMarvel from '../../assets/CaptainMarvel.png'

import {Container,SearchBar, Card, Hero} from "./styles"
import { url } from "inspector"


export function Character(){
    const {characters} = useContext(MarvelContext)

    const index = Math.floor(Math.random()*11)
    console.log(characters[index].thumbnail.path+"."+characters[index].thumbnail.extension)
    

    return(
        <Container>
            <header>
                <div>
                    <h1>Hero Search</h1>
                </div>
            </header>

            <SearchBar>
                <h3>Hero Search</h3>

                <div>
                    <input />
                    <button>Search</button>
                </div>

            </SearchBar>


            <Card>
                <div>
                    <h1>{characters[index].name}</h1>
                    <p>{characters[index].description}</p>
                </div>
                
                <div style={
                    {
                        backgroundImage: `url(${characters[index].thumbnail.path+"."+characters[index].thumbnail.extension})`,
                        backgroundSize: "cover"
                        
                    }
                    
                }>

                </div>
               
            </Card>

        </Container>
    )
}