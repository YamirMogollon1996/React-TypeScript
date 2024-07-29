import React, { useEffect, useState } from "react";
import { Root, Result } from "./Types";
import { FechinDataTodo } from "../servicios/servicices";

interface FromEstate {
  FechinData: Array<Result>;
  LoadingFeching: boolean;
}
interface ChangueValue {
  valorcambiar: string;
  valorselect: string;
}

const InitalNames = {
  valorcambiar: "",
  valorselect: "",
};

const UseContextFechin = () => {
  const [estado, setestado] = useState<FromEstate["FechinData"]>([]);
  const [Feching, setFeching] = useState<FromEstate["LoadingFeching"]>(false);
  const [FormTitle, setFormTitle] = useState<ChangueValue>(InitalNames);

  const HandleChangue = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormTitle({
      ...FormTitle,
      [e.target.name]: e.target.value,
    });
  };

  const FilterForGender = (): Array<Result> => {
    if (FormTitle.valorselect == "Male")
      return estado.filter((item) => item.gender === FormTitle.valorselect);
    if (FormTitle.valorselect === "Female")
      return estado.filter((item) => item.gender === FormTitle.valorselect);
    return estado;
  };

  const FiltroDatos = (): Array<Result> => {
    return FilterForGender().filter((usu) =>
      usu.name.toLocaleLowerCase().includes(FormTitle.valorcambiar)
    );
  };

  const ApiDefecht = async () => {
    FechinDataTodo()
      .then((data) => {
        const { info, results } = data;
        setestado(results);
        setFeching(!Feching);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  useEffect(() => {
    ApiDefecht();
  }, []);

  return {
    estado,
    Feching,
    HandleChangue,
    FormTitle,
    FiltroDatos,
    FilterForGender,
  };
};
export default UseContextFechin;
