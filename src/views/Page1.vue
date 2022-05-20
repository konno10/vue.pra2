<template>
  <div>
    <input  v-model="newTodo" type="text">
    <button @click="onClicked">add</button>
    <ul>
      <li v-for="(todo,index) in todos" :key="index">
        <input type="checkbox" v-model="todo.isDone">
        <span :class="{done:todo.isDone}">{{todo.content}}</span>
        <button @click="delate(todo.content,index)">delate</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      todos:[]
    }
  },
  methods:{
    onClicked(){
      let newItem = {
        content:this.newTodo,
        isDone:false,
      };
      if(this.newTodo!=""){
        this.todos.push(newItem)
      }
      this.newTodo=""
    },
    delate(name,index){
      if(confirm(name+"を消す")){
        this.todos.splice(index,1)
      }
    }
  }
}
</script>

<style scoped>
.done {
    opacity: 0.5;
    text-decoration: line-through;
}
li {
    list-style: none;
    margin-bottom: 10px;
}
span,
input,
button {
    margin-right: 5px;
}
hr {
    margin: 20px 0;
}
</style>
