import Vue from 'vue'
import App from './App.vue'
import assignment1 from './components/assignment1';
import assignment2 from './components/assignment2';

Vue.component('assignment-one',assignment1)

Vue.component('assignment-two',{
  extends:assignment2,
  props:['second'],
});

new Vue({
  el: '#app',
  render: h => h(App),
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lists:[
        {todo:'Cras justo odio'},
        {todo:'Dapibus ac facilisis in'},
        {todo:'Morbi leo risus'},
        {todo:'Porta ac consectetur ac'},
        {todo:'Vestibulum at eros'},
      ]
    }
  }
})
