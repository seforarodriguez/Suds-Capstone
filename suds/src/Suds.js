
import { Route, Routes } from 'react-router-dom';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import NavBar from './nav/navBar';
import './Suds.css';
import { ApplicationViews } from './views/ApplicationViews';

function Suds() {
  return (<Routes>
		<Route path="/" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
				<>
					<NavBar />
					<ApplicationViews />
				</>
		} />
	</Routes>
    
  );
}

export default Suds;
