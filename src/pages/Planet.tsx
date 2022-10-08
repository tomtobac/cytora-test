import { useParams } from 'react-router-dom';
import { usePlanet } from '../hooks/usePlanet';
import { getIdFromUrl } from '../utils';

export const Planet = () => {
	const { id } = useParams<{ id: string }>();
	const { planet, isLoading } = usePlanet(Number(id));
	if (isLoading) {
		return <div>spinner</div>;
	}

	if (!isLoading && planet) {
		return (
			<>
				<h1>{planet.name}</h1>
				<h3>Films</h3>
				<ul>
					{planet.films.map((film) => {
						const filmId = getIdFromUrl(film);
						return <li key={film}>{filmId}</li>;
					})}
				</ul>
				<h3>Vechicles</h3>
			</>
		);
	}

	return <div>ups, character not found</div>;
};
