import { createStore } from "redux"

const initialState = {
    messages: []
}

export default createStore(function (state = initialState, action){
    switch(action.type){
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        }
        case UPDATE_MESSAGES: {
            return {
                ...state,
                messages: action.messages
            }
        }
        default: {
            return state
        }
    }
})