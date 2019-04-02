import Vue from 'vue'
import App from './App.vue'
import assignment1 from './components/assignment1';
import assignment2 from './components/assignment2';
import assignment3 from './components/assignment3';

Vue.component('assignment-one',assignment1)

Vue.component('assignment-two',{
  extends:assignment2,
});

Vue.component('assignment-three',{
  extends:assignment3,
});

Vue.component("custm-btn", {
  template: `<button v-on:click="eventcall"><slot></slot></button>`,
  methods: {
    eventcall:function(){
      this.$emit('change');
    }
  },
  
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
