import React, { Component } from 'react'
import Router from './Router'
import Composition from './composition/Composition'
import DependencyInjection from './dependencyInjection/DependencyInjection'
import DataFlow from './dataFlow/DataFlow'

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
		const attrValue = Array.from(e.target.attributes)[0].value
		console.log(attrValue)
		switch(attrValue){
			case '/composition':
				return this.setState({
					routes:[
						{ url: this.state.routes[0].url, rendered: true },
						{ url: this.state.routes[1].url, rendered: false },
						{ url: this.state.routes[2].url, rendered: false }
					]
				})
			case '/dependency-injection':
				return this.setState({
					routes: [
						{ url: this.state.routes[0].url, rendered: false },
						{ url: this.state.routes[1].url, rendered: true },
						{ url: this.state.routes[2].url, rendered: false }
					]
				})
			case '/data-flow':
				return this.setState({
					routes: [
						{ url: this.state.routes[0].url, rendered: false },
						{ url: this.state.routes[1].url, rendered: false },
						{ url: this.state.routes[2].url, rendered: true }
					]
				})
			default:
				return this.state
		}
	}
	render(){
		console.log('this.state', this.state.routes)
		const { routes } = this.state
		return(
			<div className='main'>
				<div className='title'>
						<h1>React Paterns</h1>
				</div>
				<div>
					<button onClick={this.route} location='/composition'>Composition</button>
					<button onClick={this.route} location='/dependency-injection'>Dependency Injection</button>
					<button onClick={this.route} location='/data-flow'>Data flow</button>
				</div>
				<div>
					{
						routes[0].rendered && <Router to='/composition' component={Composition} currentLocation={window.location.pathname}/>
					}
					{
						routes[1].rendered && <Router to='/dependency-injection' component={DependencyInjection} currentLocation={window.location.pathname} />
					}
					{
						routes[2].rendered && <Router to='/data-flow' component={DataFlow} currentLocation={window.location.pathname} />
					}
				</div>
			</div>
		)
	}
}

export default App