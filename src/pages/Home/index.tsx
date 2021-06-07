import {Container, Beer, Comics,Music} from './styles';
import {useHistory} from 'react-router-dom'

export function Home(){

    let history  = useHistory();

    const brewdogsbeer = () => {
        history.push('/brewdogsbeer')
    }

    const marvel = () => {
        history.push('/marvel')
    }


    return(
        <Container>
            <Beer onClick={()=> brewdogsbeer()}/>
                
            <Comics onClick={()=> marvel()}/>

            <Music />
           
        </Container>
    )
}