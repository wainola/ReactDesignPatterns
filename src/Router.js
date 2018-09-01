import React, { Component } from 'react'

export class Router extends Component {
  constructor(props){
    super(props)
  }
  hola = () => {
    console.log('hola')
  }
  render() {
    console.log('this.props', this.props)
    const { component: Comp } = this.props
    return (
      <div>
        <h2>Router</h2>
        <Comp />
      </div>
    )
  }
}

export default Router
