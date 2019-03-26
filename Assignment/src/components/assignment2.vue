<template>
  <div id="assignment2" class="assignment">
   <h3>{{title}}</h3>
   <ul class="list-group">
      <li v-for="list in second" class="list-group-item" >{{list.todo}}</li>
   </ul>
  </div>
</template>

<script>
export default {
  props:['second'],
  data () {
    return {
      title: 'Assignment 2',
  
    }
  },
}
</script>

<style lang="scss">

</style>
