import { usePlanet } from '@hooks/usePlanet';
import { LikeableItem } from '@components/LikeableItem';
import { Loading } from '@components/Loading';
import { usePeople } from '@hooks/usePeople';
import { Route } from '@domain/Route';

type Props = {
	id: number;
};

export const Resident: React.FC<Props> = ({ id }) => {
	const { character, isLoading } = usePeople(id);
	if (isLoading) {
		return <Loading />;
	}
	return (
		<LikeableItem name={character?.name || ''} to={`${Route.People}/${id}`} />
	);
};
