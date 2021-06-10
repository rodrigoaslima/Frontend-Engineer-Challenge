import { FormEvent, useContext, useEffect, useState } from "react"
import { MarvelContext } from "../../MarvelContext"

import {Container,SearchBar, Card} from "./styles"



export function Character(){
    const {characters} = useContext(MarvelContext)
    const {filterHero} = useContext(MarvelContext)
    const {foundedCharacter} = useContext(MarvelContext)

    const [search, setSearch] = useState('');
    const [characterImage, setCharacterImage] = useState('');
    const [characterName, setCharacterName ] = useState('')
    const [description, setDescription] = useState('')

    useEffect(()=>{
        if(foundedCharacter.length == 0){

            const index = Math.floor(Math.random()*21)
            setCharacterName(characters[index].name)
            setCharacterImage(characters[index].thumbnail.path+"."+characters[index].thumbnail.extension);
            characters[index].description === "" 
            ? 
                setDescription("Description not avaliable") 
            :    
                setDescription(characters[index].description)
            
        } else {
            setCharacterName(foundedCharacter[0].name)
            setCharacterImage(foundedCharacter[0].thumbnail.path+"."+foundedCharacter[0].thumbnail.extension)
            foundedCharacter[0].description === "" 
            ? 
                setDescription("Description not avaliable") 
            :    
                setDescription(foundedCharacter[0].description)
        }
        
        

    },[foundedCharacter])

    function handleSearchHero(event: FormEvent){
        event.preventDefault();

        filterHero({name: search})

    }

    return(
        <Container>
            <header>
                <div>
                    <h1>Hero Search</h1>
                </div>
            </header>

            <SearchBar>
                <h3>Hero Search</h3>

                <form onSubmit={handleSearchHero}> 
                    <input type="text" value={search} onChange={event => setSearch(event.target.value)}/>
                    <button type="submit">Search</button>
                </form>

            </SearchBar>


            <Card>
                <div>
                    <h1>{characterName}</h1>
                    <p>{description}</p>
                </div>
                
                <div style={
                    {
                        backgroundImage: `url(${characterImage})`,
                        backgroundSize: "cover"
                    }
                }>

                </div>
               
            </Card>

        </Container>
    )
}