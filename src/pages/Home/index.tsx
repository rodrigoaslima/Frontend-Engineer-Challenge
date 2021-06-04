import {Container, Beer, Comics,Music} from './styles';
import {useHistory} from 'react-router-dom'

export function Home(){

    let history  = useHistory();

    const brewdogsbeer = () => {
        history.push('/brewdogsbeer')
    }


    return(
        <Container>
            <Beer onClick={()=> brewdogsbeer()}/>
                
            <Comics/>

            <Music />
           
        </Container>
    )
}