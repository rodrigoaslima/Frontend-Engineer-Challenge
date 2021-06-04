import {Container, Content} from './styles'

interface MenuProps {
    onOpenFilterModal: () => void
}


export function Header({onOpenFilterModal}:MenuProps){
 

    return(
        <Container>
            <Content>
                <button  onClick={onOpenFilterModal}>Malt</button>
                <button  onClick={onOpenFilterModal}>Hops</button>
                <button  onClick={onOpenFilterModal}>Yeast</button>
            </Content>
        </Container>

        
    )
}