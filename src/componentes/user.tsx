import React, { useEffect, useState } from "react";
import { Welcome, Address, Geo, Company } from "../types";


// con solo un estado se hacer con solo un estado
interface Props {
  usuarios: Array<Welcome>;
  removeOneuser: (id: number, data: Array<Welcome>) => void;
  eleiminarUsuarios: (item: Welcome) => void;
}   

interface Ordernar {
  name: boolean
  username: boolean
  email: boolean  ,
  country:  boolean
}
const OdrderBy = {
  name: false,
  username:false   ,
  email: false  ,
  country : false 
  
};

interface Colorchangue {
  decision: boolean;
  color: string;
}

const ValorInitial = {
  decision: false,
  color: "eee",
};
const User = ({ usuarios, removeOneuser, eleiminarUsuarios }: Props) => {
  const [ChangueColor, setChangueColor] = useState<Colorchangue>(ValorInitial);
  const [ToogleBotom, setToggleBooton] = useState<boolean>(false);
  const [FromTitle, setFormtitle] = useState<string>("");
  // const [Buscaddos, setBuscados] = useState<string>("");
  const [  Values, setvalues ]  = useState< Ordernar>(  OdrderBy)
 
  // const DeletedUser = (item) => {};
  const onChanugeElement = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormtitle(e.target.value);
  };
  const FiltrarMisusuarios =  FromTitle.length  === 0     
     ?  
 usuarios.filter((item) => item.name.toLocaleLowerCase().includes(FromTitle ))
  :usuarios
  const FilterUser   =  ()  :  Array<Welcome>   =>{
         if ( Values.country )  return [...FiltrarMisusuarios].sort((a, b) =>

          a.address.city.localeCompare(b.address.city)
         );
        if ( Values.email) return [...FiltrarMisusuarios].sort((a, b) =>
          a.email.localeCompare(b.email)
        );
         if ( Values.name)  return [...FiltrarMisusuarios].sort((a, b) =>
           a.name.localeCompare(b.name)
         );
          return FiltrarMisusuarios;  
  }
  const filtrousuarios =  FromTitle.length >   0  
  ?  
       usuarios.filter((item) => item.name.toLocaleLowerCase().includes(FromTitle ))
  : usuarios  

  
    Values.country
    ? [...filtrousuarios].sort((a, b) => {
        return a.address.city.localeCompare(b.address.city);
      })
    : filtrousuarios;


  const CambiarColor = () => {
    setChangueColor({
      ...ChangueColor,
      decision: !ChangueColor.decision,
    });
  };
  useEffect(() => {
    }, [FromTitle]);

  return (
    <>
      {ToogleBotom ? <h1>Orednar</h1> : <h1>Prinicpio</h1>}
      <h1 className="center"> Lista de Usuarios</h1>
      <hr></hr>
      <div className="TablaStripes">
        <div className="paises">
          <button onClick={CambiarColor}>ColorearFilasYamir</button>
          <button onClick={() => setToggleBooton(!ToogleBotom)}>
            {!ToogleBotom ? "Ordenar por Pais" : "Volver estado "}
          </button>

          <button
            onClick={() =>
              setvalues({
                ...Values,
                country: (Values.country = !Values.country),
              })
            }
          >
            dd
          </button>

          <input
            onChange={onChanugeElement}
            name="valor"
            placeholder="ingresa PAIS"
          ></input>
        </div>
        <table className="table">
          <thead>
            <th
              onClick={() =>
                setvalues({ ...Values, name: (Values.name = !Values.name) })
              }
            >
              name
            </th>
            <th
              onClick={() =>
                setvalues({
                  ...Values,
                  username: (Values.username = !Values.username),
                })
              }
            >
              {" "}
              username{" "}
            </th>
            <th
              onClick={() =>
                setvalues({ ...Values, email: (Values.email = !Values.email) })
              }
            >
              email
            </th>
            <th>suite</th>
            <th
              onClick={() =>
                setvalues({
                  ...Values,
                  country: (Values.country = !Values.country),
                })
              }
            >
              Pais
            </th>
            <th>Acciones</th>
          </thead>
          <tbody>
            {FilterUser().map((item, index) => {
              const ColorDecisicion = index % 2 == 0 ? "#dafeef" : "#ede4ff";
              const color = ChangueColor.decision
                ? ColorDecisicion
                : "transparent";
              return (
                <tr
                  style={{
                    backgroundColor: `${color}`,
                  }}
                  key={index}
                >
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.address.suite}</td>
                  <td>{item.address?.city}</td>
                  <td>
                    <button
                      onClick={() => eleiminarUsuarios(item)}
                      className="BUt"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <h1>{ JSON.stringify( OrderByname)}</h1> */}
      </div>

      {/* {FilterUser().map((item) => (
        <h1>{item.name}</h1>
      ))} */}
    </>
  );
};

export default User;
