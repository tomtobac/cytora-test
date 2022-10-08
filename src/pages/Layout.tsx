import { Outlet } from 'react-router-dom';
import { Favourites } from '../components/Favourites';
import { Header } from '../components/Header';

function Layout() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Favourites />
		</>
	);
}

export default Layout;
