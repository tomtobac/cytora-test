import { createBrowserRouter, Navigate } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import { Character } from './pages/Character';
import Layout from './pages/Layout';
import { People } from './pages/People';
import { Planet } from './pages/Planet';
import { Planets } from './pages/Planets';

const Redirect = () => <Navigate to="/people" />;

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Redirect />,
			},
			{
				path: '/people',
				element: <People />,
			},
			{
				path: '/people/:id',
				element: <Character />,
			},
			{
				path: '/planets',
				element: <Planets />,
			},
			{
				path: '/planets/:id',
				element: <Planet />,
			},
			{
				path: '/*',
				element: <NotFound />,
			},
		],
	},
]);

export default router;
