import { useContext } from "react"
import { MarvelContext } from "../../MarvelContext"

import captainMarvel from '../../assets/CaptainMarvel.png'

import {Container,SearchBar, Card, Hero} from "./styles"




export function Character(){
    const {characters} = useContext(MarvelContext) 
    console.log(characters[10])
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
                    <h1>CAPTAIN MARVEL</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris et imperdiet leo. Aliquam consectetur metus justo, aliquam 
                        bibendum nulla aliquet nec. Nam dignissim in tellus ut aliquet. 
                        Cras vitae ligula nec diam lobortis scelerisque ut quis risus. 
                        Fusce nec pellentesque urna, sed condimentum eros. In vehicula 
                        pretium velit, ac posuere lorem cursus et. Duis a dignissim dolor. 
                        Fusce tristique quam eget auctor vehicula. Aliquam erat volutpat.
                    </p>
                </div>
                
                <Hero/>
               
            </Card>

        </Container>
    )
}