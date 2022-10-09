import { LikeableItem } from "@components/LikeableItem";
import { Pagination } from "@components/Pagination";
import { Search } from "@components/Search";
import { getIdFromUrl } from "@utils/index";
import { PageLoading } from "@pages/PageLoading";
import { Route } from "@domain/Route";
import { useVehicles } from "@hooks/useVehicles";
import "./Vehicles.css";

export const Vehicles = () => {
  const { vehicles, isLoading, onSearch, onClear, ...pagination } =
    useVehicles();

  return (
    <section>
      <h2 className="Vehicles__title">Vehicles</h2>
      <Search onSearch={onSearch} onClear={onClear} disabled={isLoading} />
      {isLoading && <PageLoading />}
      {!isLoading && (
        <section>
          <ul className="Vehicles__list">
            {vehicles.map((vehicle) => {
              const id = getIdFromUrl(vehicle.url);
              return (
                <li key={vehicle.name} className="Vehicles__list-item">
                  <LikeableItem
                    to={`${Route.Vehicles}/${id}`}
                    name={vehicle.name}
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
