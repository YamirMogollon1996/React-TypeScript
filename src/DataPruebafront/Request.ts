import axios from "axios"


export const RequestUser =  async ()=>{   
    const UserId  =  Math.floor(Math.random()* 10) +1
    // console.log( UserId)
    let firs = await axios.get(`https://jsonplaceholder.typicode.com/users/${  UserId}`)
     let data =  await firs.data
     return data

}

export const RequestPost = async (  Userid   :  number  )=>{
   
    let firs = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${Userid}`)
    let data = await firs.data
    return data


}