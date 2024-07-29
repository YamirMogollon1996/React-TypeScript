import React, { useEffect, useState } from "react";
import { Welcome, Address, Geo, Company } from "../types";
import User from "./user";

const ApiFech = () => {
  const [user, setFechUser] = useState<Array<Welcome>>([]);

  const removeOneuser = (id: number, data: Array<Welcome>) => {
    const filtrado = user.filter((item) => item.id != id);
    setFechUser(filtrado);
  };

  const eleiminarUsuarios = (eliminar: Welcome) => {
    setFechUser(user.filter((item) => item.id != eliminar.id));
  };

  const FecthData = async () => {
    const first = await fetch("https://jsonplaceholder.typicode.com/users");
    if (first.status === 200) {
      const datos = await first.json();
      setFechUser(datos);
    } else {
      console.log("malo");
    }
  };
  

  useEffect(() => {
    FecthData();
  }, []);
  return (
    <>
      <User
        eleiminarUsuarios={eleiminarUsuarios}
        removeOneuser={removeOneuser}
        usuarios={user}
      ></User>
    </>
  );
};

export default ApiFech;
