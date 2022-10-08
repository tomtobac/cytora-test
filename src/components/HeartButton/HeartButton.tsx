import { HeartIcon } from '../Icons/Heart';
import './HeartButton.css';

type Props = {
	onClick: VoidFunction;
	isActive?: boolean;
};

export const HeartButton: React.FC<Props> = ({ onClick, isActive }) => {
	return (
		<button className="HeartButton" type="button" onClick={onClick}>
			<HeartIcon isActive={isActive} />
		</button>
	);
};
