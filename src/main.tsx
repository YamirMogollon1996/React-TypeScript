import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApiFech from "./componentes/ApiFech.tsx";
import Poke from "./componentes/Poke.tsx";
import FechinData from "./componentes/Singleton/FechinData.tsx";  
import Api from "./DataPruebafront/Api.tsx";
import VerficarRuta from "./componentes/verficarRuta.tsx";
import NotFound from "./componentes/NotFound.tsx";  
import Registrar from "./componentes/Registrar.tsx";  
import PruebaChathtp from "./componentes/PruebaChatgtp/PruebaChathtp.tsx";

let Datos  :   boolean  
const PasarDaots =  true

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>  

            <Routes>
              <Route path="/" element={<App />}></Route>
              <Route path="/prueba" element={<ApiFech />}></Route>
              <Route path="/pokemon" element={<Poke />}></Route>
              <Route path="/FechinData" element={<FechinData />}></Route>
              <Route path="/Registrar" element={<Registrar />}></Route>
              <Route
                path="/PruebaData"
                element={
                  <VerficarRuta Datos={PasarDaots}>
                    <Api></Api>
                  </VerficarRuta>
                }
              ></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
              <Route  path="/chatgpt"  element ={<PruebaChathtp></PruebaChathtp>} ></Route>
              {/* <Route path="*" element={<NotFound></NotFound>}></Route> */}
            </Routes>
          
      
  </BrowserRouter>
);
