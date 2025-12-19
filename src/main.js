import './assets/tailwind.css'
import './assets/main.scss'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { definePreset } from '@primeuix/themes';
import App from './App.vue'

import { Button, InputText } from 'primevue';

const app = createApp(App);

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
				background: 'var(--dark-mode-background)',
				color: 'var(--dark-mode-text-light-color)',
				borderColor: 'var(--dark-mode-border-color)',
			}
		}
	}
});

app.use(PrimeVue, { 
	ripple: true,
	theme: {
		preset: MyPreset,
		options: {
            darkModeSelector: '.my-app-dark',
			
        }
	},
});

app.component('InputText', InputText);
app.component('Button', Button);

app.mount('#app');
