import { FormEvent, useContext, useState } from 'react'
import Modal from 'react-modal'
import { BeerContext } from '../../BeerContext'
import {Container} from './styles'

const yeast = [
    "Wyeast 1056 - American Ale", "Wyeast 2007 - Pilsen Lager", "Wyeast 3711 - French Saison",
    "Wyeast 3522 - Belgian Ardennes", "Saflager S189", "Wyeast 1272 - American Ale II",
    "Wyeast 3333 - German", "Wheat Wyeast 3638 - Bavarian Wheat"
]

const hops = [
    "Fuggles", "First Gold", "Cascade", "Amarillo", "Simcoe", "Motueka",
    "Bramling Cross", "Centennial", "Saaz", "Nelson Sauvin", "Peppercorns",
    "Tomahawk", "Magnum", "Hersbrucker", "Honey", "Lactose", "Simcoe", "Citra",
    "Columbus Extract", "Willamette", "Galena", "Hop Extract","Chinook", "Mt.Hood",
    "Challenger", "Waimea", "Ahtanum", "Crystal", "Sorachi Ace"
]

const malt = [
    "Maris Otter Extra Pale", "Caramalt", "Munich", "Caramalt", "Propino Pale Malt",
    "Wheat Malt", "Propino Pale Malt for kettle souring", "Acidulated Malt for kettle souring",
    "Extra Pale", "Dark Crystal", "Lager Malt", "Wheat","Chocolate", "Carafa Special Malt Type 3",
    "Acidulated Malt", "Flaked Oats", "Peated Malt", "Amber", "Brown", "Crystal 150", "Pale Ale",
    "Smoked Weyermann", "Carafa Special Malt Type 1", "Dark Crystal 350-400", "Roasted Barley",
    "Smoked Malt"
]

interface NewFilterModalProps{
    isOpen: boolean;
    onRequestClose: () => void
    ingredient?: string
}


export function ModalFilter({isOpen, onRequestClose, ingredient}: NewFilterModalProps){
    const {filterBeers} = useContext(BeerContext);

    const [filterOption, setFilterOption] = useState('')
    const [selected, setSeletect] = useState('')

    async function handleNewFilter(event: FormEvent){
        event.preventDefault()
        console.log('filterOption: ', filterOption)
        console.log('selected: ', selected)
        
        await filterBeers({ingredient: filterOption, type:selected})

        onRequestClose();
    }

    function handleChecked(e:any){
        setFilterOption(e.replace(/ /g,"_"))
    }

    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={handleNewFilter}>
                <h2>Choose one Ingredient</h2>

                <select value={selected} onChange={(event)=>setSeletect(event.target.value)}>
                    <option value="yeast">Yeast</option>
                    <option value="malt">Malt</option>
                    <option value="hops">Hop</option>
                </select>

                <select value={filterOption} onChange={(event) => handleChecked(event.target.value)}>
                    {selected === "yeast" 
                    ?
                        yeast.map(y =>(
                            <option value={y}>{y}</option>
                        ))
                        
                    : selected === "hops" ? 
                        hops.map(h => (
                            <option value={h}>{h}</option>
                        ))
                    : 
                        malt.map(m => (
                            <option value={m}>{m}</option>
                        )) 
                    }
                    

                </select>
                
                <div>
                    <button type="submit">OK</button>
                    <button>Cancel</button>
                </div>

            </Container> 
        </Modal>
    )                    
    


}