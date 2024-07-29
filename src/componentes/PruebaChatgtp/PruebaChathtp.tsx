import React, { useEffect, useReducer, useState } from "react";
import { FechindData } from "./Httpreques";
import { Reducer } from "./typos";
import ItemDetails from "./ItemDetails";
import { Personaje } from "./typosfromrick"; 
import Formulario from "./formulario";
// import { useEffect } from 'react'; 
import { GetUserforLocalStorage } from "./helpers/RecogerLocalStorage";
const PruebaChathtp = () => {

  
const [state, dispatch] = useReducer( Reducer,GetUserforLocalStorage());

  const EliminarDipsath = (EliminarUsuario: Personaje) => {
    dispatch({
      type: "eliminar",
      payload: EliminarUsuario,
    });
  };

  const Actualizar = (usuarioAc: Personaje) => {
    dispatch({
      type: "actualizar",
      payload: usuarioAc,
    });
  };

  const Add =  (  usuario : Personaje )=>{
          dispatch({
            type:"agregar"  , 
            payload : usuario
          })
  }
  const Efecto = () => {
    FechindData()
      .then((data) => {
        dispatch({
          type: "traerdata",
          payload: data?.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
      let datos = localStorage.getItem("usuarios");  
      if ( datos) { 
            let dat =  JSON.parse( datos).length
            if ( dat == 0 ){
              Efecto()
            }
      }else{
        console.log("mp acer")
      }
        // Efecto();
    
  }, []);

  useEffect(() => {
        localStorage.setItem("usuarios" ,  JSON.stringify( state))
  }, [state]);


  useEffect(() =>{

          const Obtenido = GetUserforLocalStorage()
            dispatch({
              type:"obtenerDatosLocalStorage"  , 
              payload: Obtenido
            })
  }  ,   [])

  return (
    <>
      <Formulario Add={Add}></Formulario>
      <div className="ComponeteGrid">
        {state.length > 0 ? (
          state.map((item, index) => (
            <div className="StyleComponentGrid">
              <div className="Card-header">
                <ItemDetails
                  Actualizar={Actualizar}
                  EliminarDipsath={EliminarDipsath}
                  key={index}
                  item={item}
                ></ItemDetails>
              </div>
            </div>
          ))
        ) : (
          <h1>Hola mudno</h1>
        )}
      </div>
    </>
  );
};

export default PruebaChathtp;
