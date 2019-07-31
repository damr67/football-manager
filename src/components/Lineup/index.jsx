import React from "react";
import { connect } from "react-redux";

const Lineup = ({ lineup, removeLineup }) => {
  return (
    <section>
      <h3>Lineup</h3>
      <div className="container">
        {lineup.map(lineup => (
          <div className="players" key={lineup.id}>
            <div>
              <img src={lineup.photo} alt={lineup.name} />
            </div>
            <h4>{lineup.name}</h4>
            <button className="btn-danger" onClick={() => removeLineup(lineup)}>
              X
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  lineup: state.lineup
});

const mapDispatchToProps = dispatch => ({
  removeLineup(lineup) {
    dispatch({
      type: "REMOVE_LINEUP",
      lineup
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lineup);
