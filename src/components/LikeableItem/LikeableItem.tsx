import { useFavourite } from '@hooks/useFavourite';
import { Link } from 'react-router-dom';
import { HeartButton } from '@components/HeartButton';
import './LikeableItem.css';

type Props = {
	to: string;
	name: string;
};

export const LikeableItem: React.FC<Props> = ({ to, name }) => {
	const { isLiked, onToggleLike } = useFavourite(name, to);
	return (
		<>
			<Link to={to}>{name}</Link>
			<HeartButton onClick={onToggleLike} isActive={isLiked} />
		</>
	);
};
