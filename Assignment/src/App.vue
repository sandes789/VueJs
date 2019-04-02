<template>
  <div id="app">
   <!-- <assignment-one></assignment-one>
   <assignment-two v-bind:second="lists"></assignment-two>
   <assignment-three v-bind:third="lists"></assignment-three>
   <assignment-four v-bind:four="lists"></assignment-four> -->
   <button v-for="tab in tabs" :key="tab.id" v-on:click="currentTab=tab.name">{{tab.name}}</button>
   <component v-bind:is="currentTabComponent" v-bind:four="lists"></component>
  </div>
</template>

<script>
import assignment1 from './components/assignment1'
import assignment2 from './components/assignment2'
import assignment3 from './components/assignment3'
import assignment4 from './components/assignment4'

export default {
  name: "app",
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      currentTab:assignment1.name,
      tabs:[assignment1, assignment2, assignment3, assignment4],
      lists:[
        {todo:'Cras justo odio', completed:true},
        {todo:'Dapibus ac facilisis in', completed:false},
        {todo:'Morbi leo risus', completed:false},
        {todo:'Porta ac consectetur ac', completed:true},
        {todo:'Vestibulum at eros', completed:false},
      ],
     
      
    }
  },
  computed: {
    currentTabComponent() {
      return this.currentTab;
    }
  }
  
}
</script>

<style lang="scss">
.assignment {
  width: 800px;
  height: auto;
  margin: 20px auto;
  border: 1px solid #999;
  background: #eee;
  padding: 10px;
}
.list-group-item {
  margin-bottom: 1px;
}
</style>
