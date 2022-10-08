import { useParams } from 'react-router-dom';
import { usePlanet } from '@hooks/usePlanet';
import { formatNumber, getIdFromUrl } from '@utils/index';
import { Route } from '@domain/Route';
import { useFavourite } from '@hooks/useFavourite';
import { PageLoading } from '@pages/PageLoading';
import { HeartButton } from '@components/HeartButton';
import { EpisodeIcon } from '@components/Icons/Episode';
import './Planet.css';
import { Resident } from '@components/Resident';

export const Planet = () => {
	const { id } = useParams<{ id: string }>();
	const { planet, isLoading, hasError } = usePlanet(Number(id));
	const { isLiked, onToggleLike } = useFavourite(
		planet?.name,
		`${Route.Planets}/${id}`
	);

	if (hasError) {
		return <div>ups, character not found</div>;
	}

	if (isLoading) {
		return <PageLoading />;
	}

	if (!isLoading && planet) {
		return (
			<>
				<h2 className="Planet__title">
					{planet.name}
					<HeartButton onClick={onToggleLike} isActive={isLiked} />
				</h2>
				<h3>Details</h3>
				<dl>
					<dt>population:</dt>
					<dd>
						{Number.isInteger(planet.population)
							? formatNumber(Number(planet.population))
							: planet.population}
					</dd>
					<dt>rotation_period:</dt>
					<dd>{planet.rotation_period}</dd>
					<dt>orbital_period:</dt>
					<dd>{planet.orbital_period}</dd>
					<dt>diameter:</dt>
					<dd>{planet.diameter}</dd>
					<dt>climate:</dt>
					<dd>{planet.climate}</dd>
					<dt>gravity:</dt>
					<dd>{planet.gravity}</dd>
					<dt>terrain:</dt>
					<dd>{planet.terrain}</dd>
					<dt>surface_water:</dt>
					<dd>{planet.surface_water}</dd>
				</dl>
				<h3>Films</h3>
				<ul className="Planet__Movie-list">
					{planet.films.map((film) => {
						const filmId = getIdFromUrl(film) as string;
						return (
							<li key={film}>
								<EpisodeIcon episode={filmId} />
							</li>
						);
					})}
				</ul>
				<h3>Residents</h3>
				<ul>
					{planet.residents.map((resident) => {
						const residentId = getIdFromUrl(resident);
						return (
							<li key={resident}>
								<Resident id={Number(residentId)} />
							</li>
						);
					})}
				</ul>
			</>
		);
	}

	return null;
};
