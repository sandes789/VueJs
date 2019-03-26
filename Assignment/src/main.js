import Vue from 'vue'
import App from './App.vue'
import assignment1 from './components/assignment1';
import assignment2 from './components/assignment2';

Vue.component('assignment-one',assignment1)

Vue.component('assignment-two',{
  extends:assignment2,
 
});

new Vue({
  el: '#app',
  render: h => h(App),
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
     
    }
  }
})
