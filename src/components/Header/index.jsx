import logo from '../../assets/logo.png';
import { useHistory } from 'react-router-dom';
import { container } from './styles.module.scss';

export function Header() {
  const history = useHistory();

  function handleNavigateToHome() {
    history.push('/');
  }

  return(
    <header className={container}>
      <img onClick={handleNavigateToHome} src={logo} alt="memorydex"/>
      <button onClick={handleNavigateToHome}>Sair</button>
    </header>
  );
}
