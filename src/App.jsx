import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';

function App() {
	return (
		<div className="font-serif">
			<Header className="" />
			<Outlet className="" />
			<Footer className="" />
		</div>
	);
}

export default App;
