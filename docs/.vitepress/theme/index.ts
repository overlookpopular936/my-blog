// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './rainbow.css'
import './override.css'
import 'uno.css'
import 'virtual:group-icons.css'
import SwitchLayout from "./components/SwitchLayout.vue";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(SwitchLayout);
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme
