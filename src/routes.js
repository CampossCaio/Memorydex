import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Game } from './pages/Game';
import { Home } from './pages/Home';

 export default function Router() {

   return(
     <BrowserRouter>
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/game" component={Game} />
       </Switch>
     </BrowserRouter>
   )
 }