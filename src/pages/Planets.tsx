import { Link } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { usePlanets } from '../hooks/usePlanets';
import { getIdFromUrl } from '../utils';

export const Planets = () => {
	const { planets, isLoading } = usePlanets();
	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<h1>Planets</h1>
			<ul>
				{planets.map((planet) => {
					const planetId = getIdFromUrl(planet.url);
					return (
						<li key={planet.name}>
							<Link to={`/planets/${planetId}`}>{planet.name}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};
