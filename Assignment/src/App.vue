<template>
  <div id="app">
   <assignment-one></assignment-one>
  </div>
</template>

<script>
import assignment1 from './components/assignment1';

export default {
  components:{
    'assignment-one':assignment1,
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
.assignment{
  width: 500px;
  height: 180px;
  margin: auto;
  border: 1px solid #999;
  background: #eee;
  padding: 10px;

}
</style>
