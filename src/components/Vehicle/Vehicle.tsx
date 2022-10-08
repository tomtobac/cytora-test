import { useVehicle } from '../../hooks/useVehicle';
import { LikeableItem } from '../LikeableItem/LikeableItem';
import { Loading } from '../Loading/Loading';

type Props = {
	id: number;
};

export const Vehicle: React.FC<Props> = ({ id }) => {
	const { vehicle, isLoading } = useVehicle(id);
	if (isLoading) {
		return <Loading />;
	}
	return <LikeableItem name={vehicle?.name || ''} to={`/vehicle/` + id} />;
};
