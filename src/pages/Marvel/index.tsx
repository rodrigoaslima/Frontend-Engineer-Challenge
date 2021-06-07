import {Container, Menu} from './styles'

import eventsImg from '../../assets/events.jpg'
import seriesImg from '../../assets/series.jpg'
import comicsIms from '../../assets/comics.jpg'
import charactersImg from '../../assets/character.png'


export function Marvel(){
    return (
        <Container>
            <header>
                <h1>Marvel</h1>
            </header>
            
            <Menu>
                <div><img src={eventsImg} alt="Events" /></div>
                <div><img src={seriesImg} alt="Series" /></div>
                <div><img src={comicsIms} alt="Comics" /></div>
                <div><img src={charactersImg} alt="Character" /></div>
            </Menu>


        </Container>
    )
}