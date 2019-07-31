import React from "react";
import { connect } from "react-redux";

const Players = ({ players, addLineup, addReserve }) => {
  return (
    <section>
      <h2>Players</h2>
      <div className="container">
        {players.map(player => (
          <div className="players" key={player.id}>
            <div>
              <img src={player.photo} alt={player.name} />
            </div>
            <h4>{player.name}</h4>
            <div className="btn-container">
              <button onClick={() => addLineup(player)}>Lineup</button>
              <button onClick={() => addReserve(player)}>Reserve</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = dispatch => ({
  addLineup(player) {
    dispatch({
      type: "ADD_LINEUP",
      player
    });
  },
  addReserve(player) {
    dispatch({
      type: "ADD_RESERVE",
      player
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Players);
