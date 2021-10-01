type StateType = {}

const InitialState: StateType = {}

type EnterActionType = SetActionType


export const enterReducer = (state = InitialState, action: EnterActionType) => {
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
