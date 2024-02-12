import { MantineColorsTuple, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { hindVadodaraFont, rubikFont } from './theme/fonts';

const brandColor: MantineColorsTuple = [
	'#e6fcf4',
	'#d8f2eb',
	'#b8e1d5',
	'#93cfbe',
	'#74c0ab',
	'#60b79e',
	'#54b298',
	'#429d84',
	'#358c74',
	'#217963',
];

export const theme = createTheme({
	colors: {
		aquamarine: brandColor,
	},
	primaryColor: 'aquamarine',
	activeClassName: 'active',
	black: '#000',
	white: '#fff',
	fontFamily: hindVadodaraFont.style.fontFamily,
	headings: {
		fontFamily: rubikFont.style.fontFamily,
		// fontFamily: ralewayFont.style.fontFamily,
	},
});
