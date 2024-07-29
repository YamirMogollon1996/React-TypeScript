import { Result } from '../../types';
import { Personaje } from './typosfromrick';


type ActionTypes =

    | { type: "eliminar", payload: Personaje }
    | { type: "actualizar", payload: Personaje }
    | { type: "traerdata", payload: Array<Personaje> }
    | { type: "persistir", payload: Array<Personaje> }
    | { type: "agregar", payload: Personaje }
    | { type: "obtenerDatosLocalStorage", payload: Personaje[]}


export const Reducer = (state: Array<Personaje>, action: ActionTypes) => {
    switch (action.type) {
        case "traerdata":
            {
                return action.payload
            }

        case "eliminar":
            {

                return state.filter(item => item.id != action.payload.id)
            }

        case "actualizar":

            {
                const { id } = action.payload
                return state.map((item =>

                    item.id === id ?
                        { ...item, name: item.name = "GOKUUUUUUUUUUU" } : item
                )
                )
       
            }
        case "agregar": {
            return  [
                ...state, action.payload
            ]
        }

        case "obtenerDatosLocalStorage" :   {

                    return  state   = action.payload



        }

        default:
            return state
    }



}
