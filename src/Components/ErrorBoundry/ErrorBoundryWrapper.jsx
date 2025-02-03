import React, { Component } from 'react'
import "./error_boundry.css"

export default class ErrorBoundryWrapper extends Component {
    constructor(props){
        super(props)
        this.state={isError:false}
    }
    static getDerivedStateFromError(){
        return {isError:true}
    }
    componentDidCatch(error,errInfo){
        console.log({error})
        console.log({errInfo})
    }
  
  render() {
    return this.state.isError?<FallbackScreen/>:this.props.children
  }
}

const FallbackScreen=()=>{
  return<>
    <div className="fallback_container">
        <h3 className="fallback_content">Something went wrong Please try later...</h3>
    </div>
  </>
}

