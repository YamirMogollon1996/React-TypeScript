import React, { Dispatch } from 'react'
import { Result } from '../Singleton/Types';
import { Action } from '@remix-run/router';

interface Props {  

  Actualizar :  (   usuarioAc  : Result  ) => void
  EliminarDipsath  :  (EliminarUsuario   :  Result)=> void
  item: Result;
}
const ItemDetails = ({ item, EliminarDipsath  , Actualizar}: Props) => {
  return (
    <>  
      <h1>ItemDetails</h1>
      <h1>{item?.name}</h1>
      {/* <p>{item.location?.name}</p> */}
      <hr></hr>
      <br></br>
      <p>{item.created}</p>
      <p>{item?.origin?.name}</p>
      <hr></hr>
      <img className="centerImagen" src={item.image}></img>

      <div className="FooterBody">
        <button>Editar</button>
        <button onClick={() => EliminarDipsath(item)}>Eliminar</button>
        <button onClick={() => Actualizar(item)}>Actualizar</button>
        {/* <button onClick={() => RemoveItem(item)}>Eiminar</button> */}
      </div>
    </>
  );
};

export default ItemDetails