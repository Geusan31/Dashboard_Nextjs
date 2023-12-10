import {API} from '@/common/api'

export async function getUsers(skip) {
    const data = await API.get(`users/get-user?skip=${skip}`)  
    return data
} 