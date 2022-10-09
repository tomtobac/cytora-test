import { Route } from "@domain/Route";
import { usePlanet } from "@hooks/usePlanet";
import { LikeableItem } from "@components/LikeableItem";
import { Loading } from "@components/Loading";

type Props = {
  id: number;
};

export const Homeworld: React.FC<Props> = ({ id }) => {
  const { planet, isLoading } = usePlanet(id);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <LikeableItem name={planet?.name || ""} to={`${Route.Planets}/${id}`} />
  );
};
