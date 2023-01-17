import './Card.css';
import {connect} from 'react-redux'
import { setPlayer } from '../store/actions/player';

function Card({ player, setPlayer }) {
  const onCardClick= () => {
    setPlayer(player);
  }

  return <button className='container' onClick={onCardClick}>
    <a href={player.url}>
    <img className='img-card' src={player.url_Image} alt='imagen del card'/>
    </a>
    <h1 className='title'>{player.name}</h1>
    <br></br>
    <p className='description'>{player.description}</p>
    
  </button>
}

const mapActionToProps={
  setPlayer
};

export default connect(null,mapActionToProps)(Card);