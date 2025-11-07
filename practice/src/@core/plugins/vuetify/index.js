import 'vuetify/styles' // it will all the vuetify comp styling
import { createVuetify } from 'vuetify' // this line create main factory instance of vue such 
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
 
import theme from './theme'
import defaults from './defaults'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
    theme,
    defaults,
    icons:{
        defaultSet: 'mdi',
    },
})

export default vuetify