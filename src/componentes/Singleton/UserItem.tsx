import { json } from "react-router-dom";
import { Result } from "./Types";
import { Episodios } from "./Episodios";

interface Prosp {
  item: Result;
}

export const Useritem = ({ item }: Prosp) => {
  return (
    <>
      <div className="imagenes">
        <h1>{item.name.slice(0, 10)}</h1>
        <br></br>
        <img src={item.image}></img>
        <h2>{item.gender}</h2>
        <Episodios episodios={item.episode}></Episodios>
        <br></br>
        <button className="remove">Add</button>
      </div>
    </>
  );
};
