import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from './components';

function App() {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
