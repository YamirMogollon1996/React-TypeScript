import UseContextFechin from "./UseContext";
import { Useritem } from "./UserItem";
import { useEffect } from "react";
import axios from "axios";  



const FechinData = () => {
  const {
    estado,
    Feching,
    HandleChangue,
    FormTitle,
    FiltroDatos,
    FilterForGender,
  } = UseContextFechin();

  const HandlePeticion = () => {
    console.log({ func: FilterForGender() });
  };

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      HandlePeticion();
    }
  };

  useEffect(() => {
    let datos = window.addEventListener("keyup", onKeydown);
    console.log(datos);
  }, []);
  return (


    
          <>
            <div className="filtro">
              <label>Filtro</label>
              <select name="valorselect" onChange={HandleChangue} className="Select">
                <option>--todos--</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <h1>Feching DATA</h1>
            <input
              name="valorcambiar"
              onChange={HandleChangue}
              className="Data"
              placeholder="data"
            ></input>
            <div className="Componente">
              {estado.length > 0 &&
                FiltroDatos().map((item) => <Useritem item={item}></Useritem>)}
            </div>
          </>

);

};


export default FechinData;
