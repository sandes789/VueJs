<template>
  <div id="assignment3" class="assignment">
   <div class="d-flex justify-content-between align-items-center">
      <h3>{{title}}</h3>
      <div>
          <input type="text" value="" v-model="textList">
          <cust-button v-on:check="addList()">ADD</cust-button>
      </div>
    </div>
   <ul class="list-group">
      <li v-for="(list,index) in four" :key="list.id" class="list-group-item d-flex justify-content-between" >{{index + 1 }} {{list.todo}} <i v-on:click="deleteItem(index)" class="far fa-trash-alt text-danger"></i></li>
   </ul>
  </div>
</template>

<script>
export default {
  name:'assignment-three',
  props:['four'],
  data () {
    return {
      title: "Todo List",
      textList: "",
      show:true
    };
  },
  methods:{
    deleteItem: function(index){
      this.four.splice(index, 1);
    },
    addList:function(){
      this.four.push({todo:this.textList});
      alert('hi');
    }
  }
};
</script>

<style lang="scss">
</style>
