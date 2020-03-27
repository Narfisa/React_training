import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import axios from 'axios'

// ACTIONS //
const URL = "http://localhost:8081/message"

export function updateMessages(messages) {
    return {
        type: 'UPDATE_MESSAGES',
        messages
    }
}

export function getMessages() {
    return (dispatch) => {
        return axios.get(URL)
          .then((responce) => {
              dispatch(updateMessages(responce.data))
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
        return axios.post(URL, data)
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
}, applyMiddleware(thunkMiddleware))