import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import gif from '../../assets/gif.gif';
import { container } from './styles.module.scss';

Modal.setAppElement('#root');

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderColor: '#8257E5'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  }
};

export function GameFinishModal({ isOpen, closeModal}) {
  const history = useHistory();

  function handleNavigateToHome() {
    history.push('/');
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
   >
    <div className={container}>
      <section>
        <img src={gif} alt="charmander"/>
        <h1>Meus <p>parabéns!</p></h1>
        <span>Você capturou todos os <p>pokemons</p>. 🥳 🎉</span>
      </section>
      <section>
        <button onClick={handleNavigateToHome}>Voltar ao menu</button>
        <button onClick={closeModal}>Jogar novamente</button>
      </section>
    </div>
   </Modal>
  )
}