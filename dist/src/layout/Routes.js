import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import StatictHome from '../component/Home';
import Features from '../component/Features';
import Pricing from '../component/Pricing';
import Contact from '../component/Contact';
import Locations from '../component/Locations';
import DetailLocations from '../component/DetailLocations';
import Header from './Header';

class Routes extends Component {
	render() {
		return (
			<Router>
			<div>
				<Header />
				 <Switch>
            		<Route exact path="/" component={StatictHome} />
            		<Route path="/features" component={Features} />
            		<Route path="/pricing" component={Pricing} />
            		<Route path="/contact" component={Contact} />
            		<Route path="/locations" component={Locations} />
            		<Route path="/detail-locations" component={DetailLocations} />
				</Switch>
			</div>
			</Router>
		);
	}
}

export default Routes;