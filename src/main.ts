/**
 * Styles
 */
import './assets/tailwind.css'

/**
 * Material Web Components
 */
import 'material-symbols/outlined.css'
import '@material/web/all'

import { createApp } from 'vue'
import App from './App.vue'
import { MathService, MathServiceSymbol } from './services/lorentz.service'
import { ThemeService, ThemeServiceSymbol } from './services/theme.service'

const appInstance = createApp(App)
appInstance
    .provide<MathService>(MathServiceSymbol, new MathService())
    .provide<ThemeService>(ThemeServiceSymbol, new ThemeService())
    .mount('#app')
