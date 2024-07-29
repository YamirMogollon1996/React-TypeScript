import React, { useState } from "react";

import {
  // Welcome,
  Info,
  Result,
  Dob,
  Gender,
  ID,
  Coordinates,
  Street,
  Title,
} from "../types";
import { useEffect } from "react";
import { Login, ApiRes } from "../types";

const initalnames = "";

const salto = 10;

const Poke = () => {
  const [Pokemon, setPokemon] = useState<Array<Result>>([]);
  const [secundoEstado, setSecudoEstado] = useState<string>(initalnames);
  const [Ordear, setOrdendar] = useState<boolean>(false);
  const [next, setnexto] = useState<number>(0);

  const puntos = (): Array<number> => {
    let retonrar = [];
    let Division = Pokemon.length / salto;
    for (let index = 0; index < Division; index++) {
      retonrar.push(index);
    }

    return retonrar;
  };

  const previus = () => {
    if (next > 0) {
      setnexto(next - salto);
    }
  };
  const handleNext = () => {
    if (Pokemon.length - 10 > next) {
      setnexto(next + 10);
    }
  };
  const DeleteUser = (Usuario: Result): void => {
    setPokemon(Pokemon.filter((item) => item.email != Usuario.email));
  };
  const BuscarDatos = (): Array<Result> => {
    return Pokemon.filter((item) =>
      item.name.first.toLocaleLowerCase().includes(secundoEstado)
    );
  };

  const OrderBy = Ordear
    ? [...BuscarDatos()].sort((a, b) => {
        return a.location.city.localeCompare(b.location.city);
      })
    : BuscarDatos();

  const OnchanugeTe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecudoEstado(e.target.value);
  };
  let First = "https://randomuser.me/api/?results=50";
  useEffect(() => {
    fetch(First)
      .then((data) => {
        return data.json().then((result) => {
          setPokemon(result.results);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <button onClick={() => setOrdendar(!Ordear)} className="Buton">
        OrdenarPorCOnutry
      </button>
      <input
        onChange={OnchanugeTe}
        className="Fitrobuscar"
        placeholder="buscar"
      ></input>
      {/* {secundoEstado} */}
      <div className="Petry">
        {OrderBy.slice(next, next + salto).map((item) => (
          <>
            <div className="CenterContainer">
              <h1>{item.name.title.slice(0, 4)}</h1>
              <p>{item.name.first}</p>
              <p>{item.name.last}</p>
              <p>{item.location.city}</p>
              <img src={item.picture.thumbnail}></img>
              <button onClick={() => DeleteUser(item)} className="border">
                Delete Imagen
              </button>
            </div>
          </>
        ))}
      </div>

      <div className="Rayas">
        <button onClick={previus} className="Buton">
          Previus
        </button>

        {puntos().map((item, index) => (
          <button
            style={{
              background: `${item * salto === next ? "grey" : "#000000"}`,
            }}
            onClick={() => setnexto(item * salto)}
            className="Buton"
          >
            {item + 1}
          </button>
        ))}

        <button onClick={handleNext} className="Buton">
          Next
        </button>
      </div>

      {/* {BuscarDatos().length} */}
    </>
  );
};

export default Poke;
