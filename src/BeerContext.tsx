import {createContext, ReactNode, useEffect, useState} from 'react';
import { brewdogAPI } from './services/api';

interface Beers {
    name: string;
    id: number;
    image_url: string;
    description: string;
    ingredients: any

}

interface BeerProviderProps{
    children: ReactNode;
}

interface ParamsInterface{
    ingredient: string;
    type: string;
}

interface BeersContextData{
    beers: Beers[];
    filterBeers: (ingredient: ParamsInterface)=> Promise<void>;
}

export const BeerContext = createContext<BeersContextData>({} as BeersContextData);

export function BeerProvider({children}: BeerProviderProps){
    const [beers, setBeers] = useState<Beers[]>([])

    useEffect(() => {
        brewdogAPI.get('/beers').then(response => {
            setBeers(response.data); 
        })
        
    },[])

    async function filterBeers({ingredient, type} : ParamsInterface){
        await brewdogAPI.get(`/beers?${type}=${ingredient}`).then(response => setBeers(response.data))

    }

    return (
        <BeerContext.Provider value={{beers, filterBeers}}>
            {children}
        </BeerContext.Provider>
    )
}