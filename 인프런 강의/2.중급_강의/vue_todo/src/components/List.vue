<template>
  <div>
    <ul>
      <li v-for="(todoItem ,index ) in todoItems" v-bind:key="todoItem.item" class="shadow">

        <i class="checkBtn fas fa-check"  v-bind:class ="{checkBtnCompleted : todoItem.completed}" 
        v-on:click="toggleComplete(todoItem , index)"></i>

        <span v-bind:class="{textCompleted: todoItem.completed}" >{{todoItem.item}}</span>

      <span class="removeBtn" v-on:click="removeTodo(todoItem ,index)">
        <i class="fas fa-trash-alt"></i>
      </span>


      </li>
    </ul>
          <!-- v-bind:class 이해하기 위에 todoItem.completed 가 true이면 textCompleted 클래스를 적용하겠다.  -->
  </div>
</template>

<script>
export default {
  data:function(){
    return {

      todoItems : []
    }
  },
  methods:{
    removeTodo: function(todoItem , index){
        console.log(todoItem,index );
        localStorage.removeItem(todoItem);
        this.todoItems.splice(index,1); // 배열 api , 해당 index 중 1개를 지운다.
    },
    toggleComplete : function(todoItem ,index){
      console.log(todoItem,index);
      todoItem.completed  = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));

    }
  },
  created : function(){
  //  console.log("created")
    if(localStorage.length>0){
      for(var i=0; i<localStorage.length; i++){
        if(localStorage.key(i) !=='loglevel:webpack-dev-server' )
        // this.todoItems.push(localStorage.key(i));
       this.todoItems.push( JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  }

}
</script>

<style>
ul{
  list-style: none;
  padding-left : 0px;
  margin-top : 0;
  text-align: left;
  width:40%;
  margin : 0 auto;
}

li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background-color: white;
  border-radius: 5px;

}
  .removeBtn {
    margin-left: auto;
    color: #de4343
  }

.checkBtn{
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;

}
.checkBtnCompleted{
  color:#b3adad;

}
.textCompleted{
  text-decoration: line-through;
  color: #b3adad;

}

</style>