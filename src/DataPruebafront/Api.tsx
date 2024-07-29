import React, { useRef, useState } from "react";
import { usuarios, Address, Geo, Company, PostUser } from "./tipos";
import { RequestPost, RequestUser } from "./Request";
import { useEffect } from "react";
import Resize from "./Resize";






const Api = () => {
    const referencia  = useRef()
    const [estado, setEstado] = useState<usuarios>();
    const [Post, SetPosrt] = useState<PostUser[]>([]);  

  const NewUserCLikc = () => {
    GetSingleuser();
  };

  const GetSingleuser = () => {
    RequestUser()
      .then((data) => {
        setEstado(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const RenderPost = () => {
    if (estado) {
      RequestPost(estado?.id)
        .then((data) => {
          SetPosrt(data);
         })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    GetSingleuser();
  }, []);

  useEffect(() => {
    // console.log("cambiao el estado Renderesizar");
    RenderPost();
  }, [estado]);

  return (
    <>

      <div className="Ubicamos" >
          <Resize  ></Resize>
      </div>


    </>
  );
};

export default Api;
