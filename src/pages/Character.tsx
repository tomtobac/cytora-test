import { useParams } from 'react-router-dom';
import { usePeople } from '../hooks/usePeople';
import { getIdFromUrl } from '../utils';

export const Character = () => {
	const { id } = useParams<{ id: string }>();
	const { character, isLoading } = usePeople(Number(id));
	if (isLoading) {
		return <div>spinner</div>;
	}

	if (!isLoading && character) {
		return (
			<>
				<h1>{character.name}</h1>
				<h3>Films</h3>
				<ul>
					{character.films.map((film) => {
						const filmId = getIdFromUrl(film);
						return <li key={film}>{filmId}</li>;
					})}
				</ul>
				<h3>Homeworld</h3>
				<span>{getIdFromUrl(character.homeworld)}</span>
				<h3>Vechicles</h3>
				<ul>
					{character.vehicles.map((vehicle) => {
						const vehicleId = getIdFromUrl(vehicle);
						return <li key={vehicle}>{vehicleId}</li>;
					})}
				</ul>
			</>
		);
	}

	return <div>ups, character not found</div>;
};
