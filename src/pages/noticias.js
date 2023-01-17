import { connect } from "react-redux";
import Footer from "./Footer";
import Card from "../components/Card";
import { useEffect } from 'react'
import { setPlayer } from "../store/actions/player";


function Players({ players, setPlayer }) {
  useEffect(()=>{
    setPlayer()
    console.log('Hola')
  }, [])


  return (<div>
    <div className="Contenedor1">
      <h1 className="Back" align="center">Noticias</h1>
      <div className="row">
      <div className=".col-md-4 .col-sm-12">
    {
      
      players.map((player, i) => (
      
        <Card key={i} player={player}/>
      
      ))
    }
    </div>
    </div>
  </div>
  <Footer/>
  </div>)
}

const mapStateToProps = (state) => {
  return {
    players: state.player.players
  };
};

const mapActionstoProps= {
  setPlayer
}

export default connect(mapStateToProps, mapActionstoProps)(Players);