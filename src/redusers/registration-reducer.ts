type StateType = {}

const InitialState: StateType = {}

type RegistrationActionType = SetActionType


export const registrationReducer = (state = InitialState, action: RegistrationActionType) => {
    switch (action.type) {
        default:
            return state
    }
}

// Actions
export const setAC = () => {
    return {type: ''} as const
}

//ActionTypes

type SetActionType = ReturnType<typeof setAC>