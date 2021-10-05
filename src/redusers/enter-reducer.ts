type StateType = {}

const InitialState: StateType = {}

type EnterActionType = SetActionType


export const enterReducer = (state = InitialState, action: EnterActionType) => {
    switch (action.type) {
        case "DISABLED_BUTTON":{
            return {...state, }
        }
        default:
            return state
    }
}

// Actions
export const setAC = (disabled: boolean) => {
    return {type: 'DISABLED_BUTTON', disabled} as const
}

//ActionTypes

type SetActionType = ReturnType<typeof setAC>



// Thunk

