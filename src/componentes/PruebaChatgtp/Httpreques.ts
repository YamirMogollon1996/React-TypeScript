import axios from "axios"
export const FechindData = async () => {
    try {

        let First = await axios.get("https://rickandmortyapi.com/api/character/?page=10")
        if (First.status === 200) {
            let secondo = await First.data
            // console.log( secondo)
            return secondo
        }
    } catch (error) {
        console.log(error)
    }
}