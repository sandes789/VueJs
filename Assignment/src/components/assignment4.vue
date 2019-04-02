<template>
  <div id="assignment2" class="assignment">
   <h3>{{title}}</h3>
   <ul class="list-group">
      <li v-for="(list, index) in four" :key="list.id" class="list-group-item" >{{index + 1}} {{list.todo}}</li>
   </ul>
   <h3>Completed Task</h3>
   <ul class="list-group">
     <li contenteditable="true" v-for="(list, index) in completedTast" v-on:keydown.enter="completeUpdate($event,list)" :key="list.id" class="list-group-item">
       <span>{{index + 1}} {{list.todo}}</span>
    </li>
   </ul>

    <h3>Incompleted Task</h3>
   <ul class="list-group">
     <li v-for="(list, index) in incompletedTast" contenteditable="true" v-on:keydown.enter="incompleteUpdate($event,list)" :key="list.id" class="list-group-item">
       <span>{{index + 1}} {{list.todo}}</span>
    </li>
   </ul>

  </div>

</template>

<script>
export default {
  name:'assignment-four',
  props:['four'],
  
  data () {
    return {
      title: 'Assignment 4',
      
  
    }
  },
  methods:{
    completeUpdate(e, list) {
			e.preventDefault();
			list.todo = e.target.innerText;
			list.completed = false;
			e.target.blur();
		},
     incompleteUpdate(e, list) {
			e.preventDefault();
			list.todo = e.target.innerText;
			list.completed = true;
			e.target.blur();
		},
  },
 
  computed:{
    completedTast(){
      return this.four.filter(data => data.completed);
    },
    incompletedTast(){
      return this.four.filter(data => !data.completed);
    }
  }
}
</script>

<style lang="scss">

</style>
