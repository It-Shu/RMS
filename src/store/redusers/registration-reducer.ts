import { AxiosError } from "axios";
import { Dispatch } from "redux"
import {registrationAPI} from "../../api/Registration-api";

type StateType = {}

const InitialState: StateType = {}

type RegistrationActionType = SetActionType


export const registrationReducer = (state = InitialState, action: RegistrationActionType) => {
    switch (action.type) {
        case "CREATE-NEW-USER":{
            return {...state, user: action.fullName }
        }
        default:
            return state
    }
}

// Actions
export const createNewUser = (fullName: string) => {
    return {type: 'CREATE-NEW-USER', fullName} as const
}

//ActionTypes

type SetActionType = ReturnType<typeof createNewUser>

// Thunk

const createUser = (userEmail: string, userPhoneNumber: string, fullName: string, password: string) => (dispatch: Dispatch<RegistrationActionType>) => {
    registrationAPI.createUser(userEmail, userPhoneNumber, fullName, password)
        .then((res)=>{
            const user = res.data.fullName
            dispatch(createNewUser(user))
        })
        .catch((res: AxiosError) => {
            res.message
        })
}
