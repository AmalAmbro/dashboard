import Aura from '@primevue/themes/aura';
import { definePreset } from '@primeuix/themes';


const MyPreset = definePreset(Aura, {
	semantic: {
        primary: {
            50: '{indigo.50}',
            100: '{indigo.100}',
            200: '{indigo.200}',
            300: '{indigo.300}',
            400: '{indigo.400}',
            500: '{indigo.500}',
            600: '{indigo.600}',
            700: '{indigo.700}',
            800: '{indigo.800}',
            900: '{indigo.900}',
            950: '{indigo.950}'
        },
    },
	colorScheme: {
		dark: {
			content: {
				background: 'var(--dark-mode-body-background)',
				color: 'var(--dark-mode-text-color)',
				borderColor: 'var(--dark-mode-border-color)',
			}
		}
	},
    components: {
        card: {
            colorScheme: {
                dark: {
                    background: 'var(--dark-mode-component-background)',
                    color: '#f3f3f3',
                }
            }
        }
    }
});

const presetOptions = { 
	ripple: true,
	theme: {
		preset: MyPreset,
		options: {
            darkModeSelector: '.my-app-dark',
			cssLayer: {
                name: 'primevue',
                order: 'theme, base, primevue'
            }
        }
	},
};

export default presetOptions;
