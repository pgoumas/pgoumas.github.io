import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Dashboard from "./components/Dashboard"

// YOU DON'T CARE ABOUT THIS
class App extends React.Component {
	render() {
		return (
      <div className="d-flex p-2" >
			<BrowserRouter>
				<Dashboard />
			</BrowserRouter>
      </div>
		);
	}
}


export default App;
