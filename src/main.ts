import { createApp } from 'vue';
import App from './App.vue';
// @ts-ignore no types avalible for VueDragSelect unfortunately
import VueDragSelect from '@coleqiu/vue-drag-select';

const app = createApp(App);
app.use(VueDragSelect);

app.mount('#app');
