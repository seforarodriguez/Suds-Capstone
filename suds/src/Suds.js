
import { Route, Routes } from 'react-router-dom';
import NavBar from './nav/navBar';
import './Suds.css';
import { ApplicationViews } from './views/ApplicationViews';

function Suds() {
  return (<Routes>
		{/* <Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} /> */}

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
