import { useEffect, useState } from 'react';
import './Search.css';

type Props = {
	onSearch: (search: string) => void;
	onClear: VoidFunction;
	disabled?: boolean;
};

export const Search: React.FC<Props> = ({ onSearch, onClear, disabled }) => {
	const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		const form = new FormData(event.target as HTMLFormElement);
		const search = form.get('search') as string;
		if (search.length > 0) {
			onSearch(search);
		}
	};
	return (
		<form aria-disabled={disabled} onSubmit={onSubmit} className="Search">
			<input
				className="Search__input"
				name="search"
				defaultValue=""
				disabled={disabled}
			/>
			<button disabled={disabled} className="Search__button" type="submit">
				Search
			</button>
			<button
				disabled={disabled}
				className="Search__button"
				onClick={onClear}
				type="reset"
			>
				Clear
			</button>
		</form>
	);
};
