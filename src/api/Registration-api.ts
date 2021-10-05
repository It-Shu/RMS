import axios from 'axios'

const settings = {
    withCredentials: true,

}
const instance = axios.create({
    baseURL: 'http://api.work.r-m.solutions/',
    ...settings
})

export const registrationAPI = {

    createUser(userEmail: string, userPhoneNumber: string, fullName: string, password: string) {
        return instance.post<UserType>('user/register', {userEmail, userPhoneNumber, fullName, password})
    }
}

// Types
export type UserType = {
    userEmail: string,
    userPhoneNumber: string,
    fullName: string,
    password: string
}

export type UserApiType = {
    _id: {},
    userEmail: string,
    userPhoneNumber: string,
    fullName: string,
    passwordHash: string,
    confirmed: boolean,
    uuid: string,
    expireAt: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}