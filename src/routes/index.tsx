import {Switch, Route} from 'react-router-dom';

import {Home} from '../pages/Home';
import {BrewdogsBeer} from '../pages/Beer'
import { Marvel } from '../pages/Marvel';

export function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/brewdogsbeer" component ={BrewdogsBeer}/>
            <Route path="/marvel" component={Marvel}/>
        </Switch>
    )
}