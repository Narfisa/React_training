import { createStore } from "redux"
import fetch from 'cross-fetch'

// ACTIONS //
const URL = "http://localhost:8081"

export function updateMessages(messages) {
    return {
        type: 'UPDATE_MESSAGES',
        messages
    }
}

export function getMessages() {
    return (dispatch) => {
        return fetch(URL)
          .then(responce => responce.json())
          .then((responce) => {
            dispatch(updateMessages(responce))
          })
    }
}

export function pushMessage(message) {
    return {
        type: 'ADD_MESSAGE',
        message
    }
}

export function sendMessage(data) {
    return (dispatch) => {
        return fetch(URL, { method: "POST", body: JSON.stringify(data)})
          .then((responce) => dispatch(pushMessage(data)))
    }
}

// STORE //

const initialState = {
    messages: []
}
export default createStore(function (state = initialState, action){
    switch(action.type){
        case 'ADD_MESSAGE': {
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        }
        case 'UPDATE_MESSAGES': {
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