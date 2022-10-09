import { useParams } from "react-router-dom";
import { PageLoading } from "@pages/PageLoading";
import { HeartButton } from "@components/HeartButton";
import { Homeworld } from "@components/Homeworld";
import { EpisodeIcon } from "@components/Icons/Episode";
import { Vehicle } from "@components/Vehicle";
import { useFavourite } from "@hooks/useFavourite";
import { usePeople } from "@hooks/usePeople";
import { getIdFromUrl } from "@utils/index";
import { Route } from "@domain/Route";
import "./Character.css";

export const Character = () => {
  const { id } = useParams<{ id: string }>();
  const { character, isLoading, hasError } = usePeople(Number(id));
  const { isLiked, onToggleLike } = useFavourite(
    character?.name,
    `${Route.People}}/${id}`
  );

  if (hasError) {
    return <div>ups, character not found</div>;
  }

  if (isLoading) {
    return <PageLoading />;
  }

  if (!isLoading && character) {
    return (
      <section className="Character">
        <h2 className="Character__title">
          {character.name}
          <HeartButton onClick={onToggleLike} isActive={isLiked} />
        </h2>
        <h3>Details</h3>
        <dl>
          <dt>Height:</dt>
          <dd>{character.height}</dd>
          <dt>Mas:</dt>
          <dd>{character.mass}</dd>
          <dt>Birth year:</dt>
          <dd>{character.birth_year}</dd>
          <dt>Gender:</dt>
          <dd>{character.gender}</dd>
          <dt>Hair color:</dt>
          <dd>{character.hair_color}</dd>
          <dt>Skin color:</dt>
          <dd>{character.skin_color}</dd>
          <dt>Eye color:</dt>
          <dd>{character.eye_color}</dd>
        </dl>
        <h3>Films</h3>
        <ul className="Character__Movie-list">
          {character.films.map((film) => {
            const filmId = getIdFromUrl(film) as string;
            return (
              <li key={film}>
                <EpisodeIcon episode={filmId} />
              </li>
            );
          })}
        </ul>
        <h3>Homeworld</h3>
        <Homeworld id={Number(getIdFromUrl(character.homeworld))} />
        <h3>Vechicles</h3>
        <ul>
          {character.vehicles.map((vehicle) => {
            const vehicleId = getIdFromUrl(vehicle);
            return (
              <li key={vehicle}>
                <Vehicle id={Number(vehicleId)} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  return null;
};
