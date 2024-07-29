import React from "react";
import { Navigate } from "react-router-dom";


interface Props {
  Datos: boolean;
  children: JSX.Element;
}

const VerficarRuta = ({ Datos, children }: Props) => {
//   const Navigate = useNavigate();  

  return Datos   ?  children : <Navigate to={"/"} ></Navigate>
};

export default VerficarRuta;
