import React from "react";

import { connect } from "react-redux";

const Reserve = ({ reserve, removeReserve }) => {
  return (
    <div>
      <h3>Reserve</h3>
      <div className="container">
        {reserve.map(reserve => (
          <div className="players" key={reserve.id}>
            <div>
              <img src={reserve.photo} alt={reserve.name} />
            </div>
            <h4>{reserve.name}</h4>
            <button
              className="btn-danger"
              onClick={() => removeReserve(reserve)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  reserve: state.reserve
});

const mapDispatchToProps = dispatch => ({
  removeReserve(reserve) {
    dispatch({
      type: "REMOVE_RESERVE",
      reserve
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reserve);
