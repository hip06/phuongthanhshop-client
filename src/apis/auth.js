import axios from '../axios'

export const apiRegister = (data) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'post',
            url: '/api/v1/auth/register',
            data
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiLogin = (data) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'post',
            url: '/api/v1/auth/login',
            data
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})