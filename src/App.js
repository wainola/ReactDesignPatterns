import React, { Component } from 'react'
import Router from './Router'
import Composition from './composition/Composition'

export class App extends Component {
	constructor(){
		super()
		this.state = {
			routes: [
				{
					url: '/composition', rendered: false
				},
				{
					url: '/dependency-injection', rendered: false
				},
				{
					url: '/data-flow', rendered: false
				}
			]
		}
	}
	route = e => {
		e.preventDefault()
		console.log('Route', e.target)
	}
	render(){
		return(
			<div className='main'>
				<div className='title'>
						<h1>React Paterns</h1>
				</div>
				<div>
					<button onClick={this.route}>Composition</button>
					<button onClick={this.route}>Dependency Injection</button>
				</div>
				<div>
					<Router to='/composition' component={Composition} currentLocation={window.location.pathname}/>
				</div>
			</div>
		)
	}
}

export default App