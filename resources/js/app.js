require('./bootstrap')

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import trans from '@/Globals/trans'
import clickOutside from '@/Directives/clickOutside'
import dayjs from 'dayjs'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

require('dayjs/locale/en')

// Set dayjs global locale
dayjs.locale('en')

// implement global trans function
window.trans = trans

createInertiaApp({
  resolve: (name) => import(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin, QuillEditor)
      .mixin({ methods: { route, trans } })
      .directive('click-outside', clickOutside)
      .mount(el)
  },
})

InertiaProgress.init()
