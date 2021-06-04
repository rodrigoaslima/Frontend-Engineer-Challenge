import {BrowserRouter as Router} from 'react-router-dom';


import { GlobalStyles } from "./styles/global";


import {Routes} from './routes';
import { BeerProvider } from './BeerContext';


export function App() {
  return (
    <BeerProvider>
      <Router>
        <Routes/>
      </Router>
      <GlobalStyles/>
    </BeerProvider>
  );
}

