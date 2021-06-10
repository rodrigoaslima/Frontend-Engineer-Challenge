import {Switch, Route} from 'react-router-dom';

import {Home} from '../pages/Home';
import {BrewdogsBeer} from '../pages/Beer'
import { Marvel } from '../pages/Marvel';
import { Character } from '../pages/Characters';

export function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/brewdogsbeer" component ={BrewdogsBeer}/>
            <Route path="/marvel" component={Marvel}/>
            <Route path="/character" component={Character}/>
        </Switch>
    )
}