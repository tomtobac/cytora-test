import { LikeableItem } from '@components/LikeableItem';
import { Pagination } from '@components/Pagination';
import { Search } from '@components/Search';
import { useAllPeople } from '@hooks/useAllPeople';
import { getIdFromUrl } from '@utils/index';
import { PageLoading } from '@pages/PageLoading';
import { Route } from '@domain/Route';
import { ErrorLoading } from '@components/ErrorLoading';
import './People.css';

export const People = () => {
	const { people, hasError, isLoading, onSearch, onClear, ...pagination } =
		useAllPeople();

	return (
		<section>
			<h2 className="People__title">People</h2>
			<Search onSearch={onSearch} onClear={onClear} disabled={isLoading} />
			{hasError && <ErrorLoading onClick={onClear} />}
			{isLoading && !hasError && <PageLoading />}
			{!isLoading && !hasError && (
				<section>
					<ul className="People__list">
						{people.map((char) => {
							const id = getIdFromUrl(char.url);
							return (
								<li key={char.name} className="People__list-item">
									<LikeableItem to={`${Route.People}/${id}`} name={char.name} />
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
