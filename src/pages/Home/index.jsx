import { container } from './styles.module.scss';
import { useHistory } from 'react-router-dom';

export function Home() {
  const history = useHistory();

  function handleNavigateToGame() {
    history.push('/game');
  }

  return (
   <div className={container}>
     <div>
       <h1>Seja bem vindo, <span>treinador(a)!</span></h1>
       <p>
         Alguns pokemons se perderam de seus treinadores.
         Precisamos  de sua ajuda para encontra-los.<br/>
         <span> Aceita o desafio</span>?
       </p>
       <button onClick={handleNavigateToGame}>Eu aceito!</button>
     </div>
   </div>
  )
}