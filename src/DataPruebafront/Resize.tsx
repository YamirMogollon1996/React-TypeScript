import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { usuarios } from "./tipos";

const Resize = () => {
  const [usu, setUsuarios] = useState<Array<usuarios>>([]);
  const usuariosRef = useRef<Array<usuarios>>([]);

  const inputref = useRef<HTMLInputElement>(null);
  const [Resize, setResize] = useState(window.innerWidth);
  const Ismobile = Resize < 700;
  const table = Resize > 700 && Resize < 1200;
  const Pc = Resize > 1200;

  const DeleteFrom = (IdEliminar: number) => {
    setUsuarios(usu.filter((item) => item.id != IdEliminar));
  };

  const Dato = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setUsuarios(data.data);
        usuariosRef.current = data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clickRestauar = () => {
    setUsuarios(usuariosRef.current);
  };

  const Calculate = () => {
    const Resise = () => setResize(window.innerWidth);
    window.addEventListener("resize", Resise);
  };
  const handleClick = () => {
    try {
      inputref.current?.focus();
    } catch (error) {}
  };

  useEffect(() => {
    Dato();
  }, []);

  useEffect(() => {
    const Resise = () => setResize(window.innerWidth);
    window.addEventListener("resize", Resise);
    return () => {
      window.removeEventListener("resize", Resise);
    };
  }, [Resize]);

  return (
    <>
      <button onClick={clickRestauar}>Restaruar </button>
      <input
        style={{
          height: "50px",
        }}
        ref={inputref}
      ></input>
      <button onClick={handleClick}>ClickMe!</button>
      {Ismobile && <h1>MObile</h1>}
      {table && <h1>table</h1>}
      {Pc && <h1>estass en DESKTOP</h1>}
      {/* <h1>{JSON.stringify(usuariosRef.current)}</h1> */}
      {usu.map((item) => (
        <div>
          <p>{item.name}</p>
          <button onClick={() => DeleteFrom(item.id)}>Remove</button>
        </div>
      ))}
    </>
  );
};

export default Resize;
