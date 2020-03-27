import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    const { messages } = state
    return {
        messages,
        messagesCount: messages.length
    }
}

function messagesList(props) {
    return <div>
        <ul>
            {props.messages.map((item,index) => 
            <li key={index}>
                <span> {item.nickname}: </span> {item.message}
            </li>
            )}
        </ul>
        <span> Total: {props.messagesCount} </span>
    </div>
}

export default connect(mapStateToProps)(messagesList)