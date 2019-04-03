import Vue from "vue";
import App from "./App.vue";
import assignment1 from "./components/assignment1";
import assignment2 from "./components/assignment2";
import assignment3 from "./components/assignment3";
import assignment4 from "./components/assignment4";
import router from "./router"

Vue.component("assignment-one", assignment1);

Vue.component("assignment-two", {
  extends: assignment2
});

Vue.component("assignment-three", {
  extends: assignment3
});

Vue.component("assignment-four", {
  extends: assignment4
});

Vue.component("cust-button", {
  template: ` <button v-on:click="checkme()"><slot></slot></button> `,
  methods: {
    checkme: function() {
      this.$emit("check");
    }
  }
});

new Vue({
  el: "#app",
  router,
  render: h => h(App),
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
});
