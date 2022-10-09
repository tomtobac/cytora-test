import { useParams } from "react-router-dom";
import { PageLoading } from "@pages/PageLoading";
import { HeartButton } from "@components/HeartButton";
import { EpisodeIcon } from "@components/Icons/Episode";
import { useFavourite } from "@hooks/useFavourite";
import { getIdFromUrl } from "@utils/index";
import { Route } from "@domain/Route";
import { useVehicle } from "@hooks/useVehicle";
import { Resident } from "@components/Resident";
import "./Vehicle.css";

export const Vehicle = () => {
  const { id } = useParams<{ id: string }>();
  const { vehicle, isLoading, hasError } = useVehicle(Number(id));
  const { isLiked, onToggleLike } = useFavourite(
    vehicle?.name,
    `${Route.Vehicles}}/${id}`
  );

  if (hasError) {
    return <div>ups, vehicle not found</div>;
  }

  if (isLoading) {
    return <PageLoading />;
  }

  if (!isLoading && vehicle) {
    return (
      <section className="Vehicle">
        <h2 className="Vehicle__title">
          {vehicle.name}
          <HeartButton onClick={onToggleLike} isActive={isLiked} />
        </h2>
        <h3>Details</h3>
        <dl>
          <dt>model:</dt>
          <dd>{vehicle.model}</dd>
          <dt>starship_class:</dt>
          <dd>{vehicle.starship_class || "unknow"}</dd>
          <dt>manufacturer:</dt>
          <dd>{vehicle.manufacturer}</dd>
          <dt>cost_in_credits:</dt>
          <dd>{vehicle.cost_in_credits}</dd>
          <dt>length:</dt>
          <dd>{vehicle.length}</dd>
          <dt>max_atmosphering_speed:</dt>
          <dd>{vehicle.max_atmosphering_speed}</dd>
          <dt>crew:</dt>
          <dd>{vehicle.crew}</dd>
          <dt>passengers:</dt>
          <dd>{vehicle.passengers}</dd>
          <dt>cargo_capacity:</dt>
          <dd>{vehicle.cargo_capacity}</dd>
          <dt>consumables:</dt>
          <dd>{vehicle.consumables}</dd>
          <dt>hyperdrive_rating:</dt>
          <dd>{vehicle.hyperdrive_rating || "unknow"}</dd>
          <dt>MGLT:</dt>
          <dd>{vehicle.MGLT || "unknow"}</dd>
        </dl>
        <h3>Films</h3>
        <ul className="Vehicle__Movie-list">
          {vehicle.films.map((film) => {
            const filmId = getIdFromUrl(film) as string;
            return (
              <li key={film}>
                <EpisodeIcon episode={filmId} />
              </li>
            );
          })}
        </ul>
        <h3>Pilots</h3>
        <ul>
          {vehicle.pilots.map((pilot) => {
            const pilotId = getIdFromUrl(pilot);
            return (
              <li key={pilot}>
                <Resident id={Number(pilotId)} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  return null;
};
