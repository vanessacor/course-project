import { createApp } from "vue";
import App from "./App.vue";

import BaseCard from '@/components/ui/BaseCard'
import BaseButton from '@/components/ui/BaseButton'

const app = createApp(App)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)

app.mount("#app");
