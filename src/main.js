import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'

import router from '@/router'
// styles
import './assets/tailwind.css'
import './assets/main.scss'
import presetOptions from '@/theme'

import { 
	Button, 
	Card,
	InputText,
	SelectButton
} from 'primevue';

const app = createApp(App);
app.use(PrimeVue, presetOptions);

app.use(router);

// components registration
app.component('Button', Button);
app.component('Card', Card)
app.component('InputText', InputText);
app.component('SelectButton', SelectButton);

app.mount('#app');
