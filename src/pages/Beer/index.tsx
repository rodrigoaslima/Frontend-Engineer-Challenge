import { useContext, useState } from 'react'
import {FiFilter} from 'react-icons/fi'
import { BeerContext } from '../../BeerContext'
import { Header } from '../../components/Header'
import { ModalFilter } from '../../components/ModalFilter'
import {Container} from './styles'


export function BrewdogsBeer(){

    const {beers} = useContext(BeerContext)
    
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

    function handleOpenFilterModal(){
        setIsFilterModalOpen(true);
    }

    function handleCloseFilterModal(){
        setIsFilterModalOpen(false)
    }   


    return(
        <>
            <Header onOpenFilterModal={handleOpenFilterModal}/>
            
            <Container >

                <button onClick={handleOpenFilterModal}><FiFilter/>Filter</button>

                {beers.map(beer => {
                    return(
                        <li key={beer.id}>
                            <img src={beer.image_url} alt={beer.image_url} />
                            {beer.name}
                            <input type="checkbox" name={beer.name} id={beer.name} />
                        </li>
                    )
                })}
            </Container>

            <ModalFilter 
                isOpen={isFilterModalOpen}
                onRequestClose={handleCloseFilterModal}
            />


        </>
    )
}