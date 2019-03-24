<template>
  <div id="assignment1" class="assignment">
   <h3>{{title}}</h3>
   <label>A</label>
   <input type="checkbox" value="I am label A" v-model="messages">
   <br/>
   <label>B</label>
   <input type="checkbox" value="I am label B" v-model="messages">


   <div class="preview">
     <ul>
       <li v-for="message in messages">{{message}}</li>
     </ul>
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Assignment 1',
      messages:[]
    }
  },
}
</script>

<style lang="scss">

</style>
