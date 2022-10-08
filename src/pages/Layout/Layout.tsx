import { Outlet } from 'react-router-dom';
import { Footer } from '@components/Footer';
import { Favourites } from '@components/Favourites';
import { Header } from '@components/Header';
import './Layout.css';

export const Layout = () => {
	return (
		<>
			<div className="Layout">
				<div className="Layout__header">
					<Header />
				</div>
				<main className="Layout__content">
					<Outlet />
				</main>
				<aside className="Layout__fav">
					<Favourites />
				</aside>
			</div>
			<Footer />
		</>
	);
};
