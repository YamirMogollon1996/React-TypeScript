import { useEffect, useState, useReducer } from "react";
import "./App.css";
import List from "./List";
import { Subs } from "./types";
import Formulario from "./Formulario";

const initalNames = [
  {
    nick: "dapleu",
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    subMonts: 7,
    description: "depeuñ",
  },
  {
    nick: "sonia",
    avatar: "https://i.pravatar.cc/150?u=geradro",
    subMonts: 17,
    description: "depeuñ",
  },
];

type FormReducerAction =
  | { type: "add"; payload: Subs }
  | { type: "remove"; payload: string };

const reducer = (state: Array<Subs>, action: FormReducerAction) => {
  switch (action.type) {
    case "add":
       return   [...state ,  action.payload]

    case "remove":
      return state.filter((item) => item.nick != action.payload);

    default:
      return state;
  }
};
function App() {
  const [State, dispatch] = useReducer(reducer, initalNames);

  const onsubmit = (nuevosub: Subs) => {
    dispatch({
      type: "add",
      payload: nuevosub,
    });
  };

  const DeleteDuser = (id: string) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };

  return (
    <>
      {/* <h1>{JSON.stringify( State )}</h1> */}
      <h1>{initalNames.length}</h1>
      <div className="Raya">
        {State.map((item , index) => (
          <List key={index}  DeleteDuser={DeleteDuser} sub={item}></List>
        ))}
      </div>
      <Formulario onsubmit={onsubmit}></Formulario>
    </>
  );
}

export default App;
