<template>
  <div id="assignment3" class="assignment">
   <div class="d-flex justify-content-between align-items-center">
   <h3>{{title}}</h3>
   <div>
   <input type="text" value="" v-model="textList">
   <i v-on:click="addList()" class="fas fa-plus-circle text-success"></i></div></div>
   <ul class="list-group">
      <li v-for="(list,index) in second" :key="list.id" class="list-group-item d-flex justify-content-between" >{{index + 1 }} {{list.todo}} <i v-on:click="deleteItem(index)" class="far fa-trash-alt text-danger"></i></li>
   </ul>
  </div>
</template>

<script>
export default {
  props:['second'],
  data () {
    return {
      title: 'Assignment 3',
      textList:''
  
    }
  },
  methods:{
    deleteItem: function(index){
      this.second.splice(index, 1);
    },
    addList:function(){
      this.second.push({todo:this.textList});
    }
  }
}
</script>

<style lang="scss">

</style>
