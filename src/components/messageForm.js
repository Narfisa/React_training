import React from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../store'

class messageForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message: '',
            nickname: ''
        }
    }

    sendMessage() {
        this.props.dispatch(sendMessage({nickname: this.state.nickname, message: this.state.message}))
        this.setState({message: ''})
    }

    render() {
        return <form>
            <input value={this.state.nickname} type="text" 
                onChange={(event) => this.setState({nickname: event.target.value})}/>
            <br/>
            <textarea value={this.state.message} 
                onChange={(event) => this.setState({message: event.target.value})}/>
            <br/>
            <input type="button" value="Send" onClick={() => this.sendMessage()}/>
        </form>
    }
}

export default connect()(messageForm)