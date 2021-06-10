import {BrowserRouter as Router} from 'react-router-dom';


import { GlobalStyles } from "./styles/global";


import {Routes} from './routes';
import { BeerProvider } from './BeerContext';
import { MarvelCharacterProvider } from './MarvelContext';


export function App() {
  return (
    <MarvelCharacterProvider>
    <BeerProvider>
      <Router>
        <Routes/>
      </Router>
      <GlobalStyles/>
    </BeerProvider>
    </MarvelCharacterProvider>
  );
}

