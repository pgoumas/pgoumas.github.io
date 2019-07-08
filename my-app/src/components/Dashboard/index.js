import React from 'react';
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from "../Home"
import Marketing from "../Marketing"
import Automation from "../Automation"


// This is what you really care about
class Dashboard extends React.Component {
	render() {
		return (
     <div className="container-fluid" >
     <ul className="nav justify-content-center nav-tabs">
  <li className="nav-item">
      <NavLink className="nav-link" exact to="/">
						Home
			</NavLink>
  </li>
  <li className="nav-item">
          <NavLink className="nav-link" exact to="/marketing" >
						Marketing
					</NavLink>
  </li>
  <li className="nav-item">
          <NavLink className="nav-link" exact to="/automation" >
          Automation
					</NavLink>
  </li>
</ul>
				<div className="container-fluid justify-content-center">
          <Route exact path="/" component={Home} />
          <Route exact path="/marketing" component={Marketing} />
          <Route exact path="/automation" component={Automation} />
				</div>
        </div>
		);
	}
}

export default Dashboard;