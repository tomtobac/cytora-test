import { Link } from 'react-router-dom';
import { useAllPeople } from '../hooks/useAllPeople';

export const People = () => {
	const { people, isLoading } = useAllPeople();

	if (isLoading) {
		return <div>spinner</div>;
	}

	if (!isLoading && people?.length) {
		return (
			<ul>
				{people.map((char) => {
					const [id] = char.url.match(/\d+/) || [];
					return (
						<li key={char.name}>
							<Link to={`/people/${id}`}>{char.name}</Link>
						</li>
					);
				})}
			</ul>
		);
	}
	return null;
};
