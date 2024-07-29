import axios from "axios"
let Api = "https://rickandmortyapi.com/api/character"
export const FechinDataTodo = () => {
    return axios.get(Api).then(res => res.data).catch((error) => console.log(error))
}