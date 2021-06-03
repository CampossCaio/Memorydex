import logo from '../../assets/logo.png';
import { container } from './styles.module.scss';

export function Header() {
  return(
    <header className={container}>
      <img src={logo} alt="memorydex"/>
      <button>Sair</button>
    </header>
  );
}
