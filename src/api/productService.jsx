import { instance } from "./axios";


export const FIND_ALL = async () => {
    let response = await instance.get('/')
    return response.data;
}