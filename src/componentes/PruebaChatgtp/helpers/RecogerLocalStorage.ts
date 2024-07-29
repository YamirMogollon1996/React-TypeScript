import { Result } from '../../Singleton/Types';

export const GetUserforLocalStorage = (): Array<Result> => {
    const LocalStorageSession = localStorage.getItem("usuarios")
    if (LocalStorageSession === null) {
        return []
    }
    try {
        return   JSON.parse(LocalStorageSession)  as Result[]
    } catch (error) {
        console.log(error)
    }
    return []
}