<template>
  <div id="assignment2" class="assignment">
   <h3>{{title}}</h3>
   <ul class="list-group">
      <li v-for="list in four" :key="list.id" class="list-group-item" >{{list.todo}}</li>
   </ul>
  </div>
</template>

<script>
export default {
  name:'assignment-two',
  props:['four'],
  data () {
    return {
      title: 'Assignment 2',
  
    }
  },
}
</script>

<style lang="scss">

</style>
