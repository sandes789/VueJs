<template>
  <div id="app">
   <assignment-one></assignment-one>
   <assignment-two v-bind:second="lists"></assignment-two>
   <assignment-three v-bind:second="lists"></assignment-three>
  </div>
</template>

<script>


export default {
  name: 'app',
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
}
</script>

<style lang="scss">
.assignment{
  width: 800px;
  height: auto;
  margin: 20px auto;
  border: 1px solid #999;
  background: #eee;
  padding: 10px;

}
</style>
