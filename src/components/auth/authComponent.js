import React from 'react'


export class Auth extends React.Component{
    render(){
        return <div>
            <input value={this.props.email} 
                onChange={(event)=>{this.props.setEmail(event.target.value)}}>
                </input>
            <input value={this.props.password} onChange={(event)=>{
                this.props.setPassword(event.target.value)
            }} type='password'></input>
        </div>
    }
};
