<template>
  <div id="assignment1" class="assignment">
   <h3>{{title | capsName}}</h3>
   <label>A</label>
   <input type="checkbox" value="I am label A" v-model="messages">
   <br/>
   <label>B</label>
   <input type="checkbox" value="I am label B" v-model="messages">
   <br/>
   <label>Km</label>
   <input type="text" v-model="km">
   <br/>
   <label>m</label>
   <input type="text" v-model="m">


   <div class="preview">
     <ul>
       <li v-for="message in messages" :key="message.id">{{message}}</li>
     </ul>
   </div>
  </div>
</template>

<script>
export default {
  name:'assignment-one',
  data () {
    return {
      title: 'Assignment 1',
      messages:[],
      km:0,
      m:0,
    }
  },
  filters:{
    capsName:function(value){
      return value.toUpperCase();
    }
  },

  watch:{
    km:function(newValue,oldValue){
      this.km= newValue;
      this.m= newValue*1000;
    },
    m:function(newValue,oldValue){
      this.km= newValue / 1000;
      this.m= newValue;
    },
  }
}
</script>

<style lang="scss">

</style>
