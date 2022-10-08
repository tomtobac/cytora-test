import { useFavoritesStore } from '../../hooks/useFavouritesStore';
import { LikeableItem } from '../LikeableItem/LikeableItem';
import './Favourites.css';

export const Favourites = () => {
	const { likes } = useFavoritesStore();
	return (
		<aside className="Favourite">
			<header className="Favourite__title">
				<h2>Favourites</h2>
			</header>
			<ul className="Favourite__list">
				{likes.map((like) => (
					<li className="Favourite__list-item" key={like.name}>
						<LikeableItem name={like.name} to={like.path} />
					</li>
				))}
			</ul>
		</aside>
	);
};
