import {terser} from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
	input: 'src/script.js',
	output: [{
		file: 'site/assets/js/script.js',
		format: 'iife',
		sourcemap: true,
		plugins: [terser()]
	}],
	plugins: [
		sourcemaps()
	]
}
