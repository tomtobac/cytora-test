import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<header>
			StarWars ·{' '}
			<nav>
				<ul>
					<li>
						<NavLink to="/people">/people</NavLink>
					</li>
					<li>
						<NavLink to="/planets">/planets</NavLink>
					</li>
					<li>
						<NavLink to="/starships">/starships</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
