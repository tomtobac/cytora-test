import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
			'@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
			'@components': fileURLToPath(
				new URL('./src/components', import.meta.url)
			),
			'@domain': fileURLToPath(new URL('./src/domain', import.meta.url)),
			'@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
			'@services': fileURLToPath(new URL('./src/services', import.meta.url)),
		},
	},
	plugins: [react()],
});
