import React, { useState } from "react";
import { Subs } from "./types";

let intiaNames = {
  nick: "",
  avatar: "",
  subMonts: 0,
  description: "",
};

//Tipar  las Props

interface FromProps {
  onsubmit: (newSub: Subs) => void;
}

//tipar los Estados
interface Formstate {
  subdnames: Subs;
  valornumero: number;
}
const Formulario = ({ onsubmit }: FromProps) => {
  const [nuevo, setnuevo] = useState<Formstate["subdnames"]>(intiaNames);
  const [Valor, setValor] = useState<Formstate["valornumero"]>(0);

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(nuevo);
    onsubmit(nuevo);
    setTimeout(() => {
        setnuevo(intiaNames)
    }, 1000);
  };

  const handleChangue = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setnuevo({
      ...nuevo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>{Valor}</h1>
      <form className="CentroText" onSubmit={HandleSubmit}>
        <input
          value={nuevo.nick}
          placeholder="nick"
          onChange={handleChangue}
          name="nick"
          type="text"
        ></input>
        <input
          value={nuevo.avatar}
          placeholder="avatar"
          onChange={handleChangue}
          name="avatar"
          type="text"
        ></input>
        <input
          value={nuevo.subMonts}
          placeholder="numero"
          onChange={handleChangue}
          name="subMonts"
          type="text"
        ></input>

        <textarea
          value={nuevo.description}
          placeholder="text"
          onChange={handleChangue}
          name="description"
          //   type="text"
        ></textarea>
        <button className="but">Add</button>
      </form>
    </>
  );
};

export default Formulario;
