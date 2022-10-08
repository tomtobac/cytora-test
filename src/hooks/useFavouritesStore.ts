import create from 'zustand';

type Like = {
	name: string;
	path: string;
};

type FavouriteState = {
	likes: Like[];
	addLike: (like: Like) => void;
	removeLike: (name: string) => void;
};

export const useFavoritesStore = create<FavouriteState>((set) => ({
	likes: [],
	addLike: (item) => set((state) => ({ likes: state.likes.concat([item]) })),
	removeLike: (item) =>
		set((state) => ({
			likes: state.likes.filter(({ name }) => name !== item),
		})),
}));
