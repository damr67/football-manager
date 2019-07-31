import { createStore } from "redux";

const initialState = {
  players: [
    {
      id: 1,
      name: "Messi",
      position: "lateral",
      photo: "https://picsum.photos/120/120"
    },
    {
      id: 2,
      name: "cR7",
      position: "delantero",
      photo: "https://picsum.photos/121/121"
    },
    {
      id: 3,
      name: "Suarez",
      position: "delantero",
      photo: "https://picsum.photos/122/122"
    },
    {
      id: 4,
      name: "Pique",
      position: "Defensa",
      photo: "https://picsum.photos/124/123"
    },
    {
      id: 5,
      name: "modric",
      position: "lateral",
      photo: "https://picsum.photos/130/130"
    },
    {
      id: 6,
      name: "iniesta",
      position: "central",
      photo: "https://picsum.photos/122/173"
    },
    {
      id: 7,
      name: "robertoc",
      position: "nueve",
      photo: "https://picsum.photos/122/150"
    },
    {
      id: 8,
      name: "marcelo",
      position: "defensa",
      photo: "https://picsum.photos/111/112"
    },
    {
      id: 9,
      name: "buffon",
      position: "portero",
      photo: "https://picsum.photos/142/90"
    },
    {
      id: 10,
      name: "iniesta",
      position: "central",
      photo: "https://picsum.photos/162/173"
    },
    {
      id: 11,
      name: "embape",
      position: "delantero",
      photo: "https://picsum.photos/140/120"
    },
    {
      id: 12,
      name: "rondon",
      position: "central",
      photo: "https://picsum.photos/126/123"
    },
    {
      id: 13,
      name: "farinez",
      position: "portero",
      photo: "https://picsum.photos/125/123"
    },
    {
      id: 14,
      name: "neymar",
      position: "delantero",
      photo: "https://picsum.photos/120/122"
    },
    {
      id: 15,
      name: "hazard",
      position: "delantero",
      photo: "https://picsum.photos/142/123"
    }
  ],
  lineup: [],
  reserve: []
};

const reducerManager = (state = initialState, action) => {
  if (action.type === "ADD_LINEUP") {
    return {
      ...state,
      lineup: state.lineup.concat(action.player),
      players: state.players.filter(player => player.id !== action.player.id)
    };
  }
  if (action.type === "ADD_RESERVE") {
    return {
      ...state,
      reserve: state.reserve.concat(action.player),
      players: state.players.filter(player => player.id !== action.player.id)
    };
  }
  if (action.type === "REMOVE_LINEUP") {
    return {
      ...state,
      players: state.players.concat(action.lineup),
      lineup: state.lineup.filter(player => player.id !== action.lineup.id)
    };
  }
  if (action.type === "REMOVE_RESERVE") {
    return {
      ...state,
      players: state.players.concat(action.reserve),
      reserve: state.reserve.filter(reserve => reserve.id !== action.reserve.id)
    };
  }

  return state;
};

export default createStore(reducerManager);
