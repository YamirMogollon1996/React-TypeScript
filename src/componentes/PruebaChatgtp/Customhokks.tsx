import React, { useState } from "react";

const useCustomhokks = <T extends object>(initSate: T) => {
  const [estado, setestado] = useState(initSate);

  const handlehcanuge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setestado({
      ...estado,
      [e.target.name]: e.target.value,
    });
  };


  const HandleSubmit = (  e : React.FormEvent<HTMLFormElement>  )=>{
                    e.preventDefault()
                    console.log( estado)

  }

  return {
    estado,
    setestado,
    handlehcanuge,
    HandleSubmit,
  };
};

export default useCustomhokks;
