// src/plugins/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components' // this will register all vuetify components globally
import * as directives from 'vuetify/directives'
//  If using npm install for mdi icons:
import theme from './theme'
import defaults from './defaults'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme,
  defaults,
  icons: {
    defaultSet: 'mdi',
  },
})

export default vuetify
