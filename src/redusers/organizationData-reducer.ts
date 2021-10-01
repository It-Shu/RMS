type StateType = {}

const InitialState: StateType = {}

type OrganizationDataActionType = SetActionType


export const organizationDataReducer = (state = InitialState, action: OrganizationDataActionType) => {
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