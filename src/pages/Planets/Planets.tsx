import { PageLoading } from "@pages/PageLoading";
import { Route } from "@domain/Route";
import { usePlanets } from "@hooks/usePlanets";
import { getIdFromUrl } from "@utils/index";
import { Search } from "@components/Search";
import { Pagination } from "@components/Pagination";
import { LikeableItem } from "@components/LikeableItem";
import { ErrorLoading } from "@components/ErrorLoading";
import "./Planets.css";

export const Planets = () => {
  const { planets, hasError, isLoading, onSearch, onClear, ...pagination } =
    usePlanets();

  return (
    <section>
      <h2>Planets</h2>
      <Search onSearch={onSearch} onClear={onClear} disabled={isLoading} />
      {hasError && <ErrorLoading onClick={onClear} />}
      {isLoading && !hasError && <PageLoading />}
      {!isLoading && !hasError && (
        <section>
          <ul className="Planets__list">
            {planets.map((planet) => {
              const planetId = getIdFromUrl(planet.url);
              return (
                <li key={planet.name} className="Planets__list-item">
                  <LikeableItem
                    to={`${Route.Planets}/${planetId}`}
                    name={planet.name}
                  />
                </li>
              );
            })}
          </ul>
          <Pagination {...pagination} />
        </section>
      )}
    </section>
  );
};
