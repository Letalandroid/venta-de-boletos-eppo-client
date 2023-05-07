import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import BuyTicket from './components/ticket/BuyTicket';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/comprar-boleto" Component={BuyTicket} />
				<Route path="*" element={<h1>404 Not Found</h1>} />
			</Routes>
		</Router>
	);
}

export default App;
