import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import router from '@/router'
// styles
import './assets/styles/tailwind.css'
import './assets/styles/main.scss'
import presetOptions from '@/theme'

import { 
	Avatar,
	Button, 
	Card,
	DatePicker,
	Divider,
	InputText,
	SelectButton,
	Textarea
} from 'primevue';


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App);
app.use(PrimeVue, presetOptions);

app.use(router);

// components registration
app.component('Avatar', Avatar);
app.component('Button', Button);
app.component('Card', Card)
app.component('DatePicker', DatePicker);
app.component('Divider', Divider);
app.component('InputText', InputText);
app.component('SelectButton', SelectButton);
app.component('Textarea', Textarea);

app.use(pinia).mount('#app');
