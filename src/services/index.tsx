import axios from "axios"


const URL = 'https://gofwapi.ga/api/';
interface User {
    email: string,
    password: string
}
const getData = async (url: string) => {
    return await axios(URL + url)
}
const postData = async (url: string, data: User) => {
    const headers = {
        Accept: 'application/json'
    }
    return await axios.post(URL + url, data, {
        headers: headers
    })
}

export { getData, postData };