<template>
  <div id="assignment3" class="assignment">
    <div class="d-flex justify-content-between align-items-center">
      <h3>{{title}}</h3>
      <div>
        <input type="text" value v-model="textList">
        <!-- <i v-on:click="addList()" class="fas fa-plus-circle text-success"></i> -->
        <custm-btn v-on:change="addList()">ADD</custm-btn>
      </div>
    </div>
    <ul class="list-group">
      <li
        v-for="(list,index) in third"
        :key="list.id"
        class="list-group-item d-flex justify-content-between">
        {{index + 1 }} {{list.todo}}
        <div>
          <label v-if="!list.completed" class="text-success">Incomplete</label>
          <label v-else class="text-danger">complete</label>
          <custm-btn v-on:change="openEdit()">Edit</custm-btn>
          <custm-btn v-on:change="deleteItem(index)">Delete</custm-btn>
        </div>
      </li>
        <div class="justify-content-between align-items-center" v-show="show!=show">
          <input class="form-control form-control-sm mr-3" type="text" placeholder="Todo List">
          <custm-btn>Close</custm-btn>
        </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["third"],
  data() {
    return {
      title: "Todo List",
      textList: "",
      show:true
    };
  },
  methods: {
    deleteItem: function(index) {
      this.third.splice(index, 1);
    },
    addList: function() {
      this.third.push({ todo: this.textList });
      this.textList = "";
    },
    openEdit:function(){
      return this.show=false
    }
  }
};
</script>

<style lang="scss">
</style>
