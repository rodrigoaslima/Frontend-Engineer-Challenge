import {Link} from 'react-router-dom'

import {Container, Menu, Card} from './styles'

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
                <Card>

                    <div><Link to="/events"><img src={eventsImg} alt="Events" /></Link></div>
                    <h3>Events</h3>
                </Card>

                <Card>
                    <div><Link to="/series"><img src={seriesImg} alt="Series" /></Link></div>
                    <h3>Series</h3>
                </Card>
                
                <Card>
                    <div><Link to="/comics"><img src={comicsIms} alt="Comics" /></Link></div>
                    <h3>Comics</h3>
                </Card>
                
                <Card>
                    <div><Link to="/character"><img src={charactersImg} alt="Character" /></Link></div>
                    <h3>Characters</h3>
                </Card>
                
            </Menu>


        </Container>
    )
}