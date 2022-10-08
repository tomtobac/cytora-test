import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';

const BASE_URL = 'https://swapi.dev/api';

function configure() {
	const forageStore = localforage.createInstance({
		driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
		name: 'swapi',
	});

	return setup({
		baseURL: BASE_URL,
		cache: {
			maxAge: 2 * 60 * 60 * 1000,
			exclude: { query: false },
			store: forageStore,
		},
	});
}

export default configure();
