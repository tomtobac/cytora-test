import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';
import memoryDriver from 'localforage-memoryStorageDriver';

const BASE_URL = 'https://swapi.dev/api';

async function configure() {
	await localforage.defineDriver(memoryDriver);

	const forageStore = localforage.createInstance({
		driver: [
			localforage.INDEXEDDB,
			localforage.LOCALSTORAGE,
			memoryDriver._driver,
		],
		name: 'swapi',
	});

	return setup({
		baseURL: BASE_URL,
		cache: {
			maxAge: 60 * 60 * 1000,
			store: forageStore,
		},
	});
}

export default configure;
