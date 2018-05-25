Vue.component('app-header', {
  props: ['text'],
  template: '<header><h1><img src="alligator-logo.png" alt="Alligator Logo">{{ text }}</h1></header>'
})