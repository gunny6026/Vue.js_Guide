<template>
  <div>
    <transition-group name="list" tag="ul">
     
    <!-- <ul> -->
      <li v-for="(todoItem ,index ) in this.$store.state.todoItems" v-bind:key="todoItem.item" class="shadow">

        <i class="checkBtn fas fa-check"  v-bind:class ="{checkBtnCompleted : todoItem.completed}" 
        v-on:click="toggleComplete(todoItem , index)"></i>

        <span v-bind:class="{textCompleted: todoItem.completed}" >{{todoItem.item}}</span>
          <!-- v-bind:class 이해하기 위에 todoItem.completed 가 true이면 textCompleted 클래스를 적용하겠다.  -->
      <span class="removeBtn" v-on:click="removeTodo(todoItem ,index)">
        <i class="fas fa-trash-alt"></i>

      </span>
      </li>
 <!-- </ul> -->
  </transition-group>
  </div>
</template>

<script>
export default {
 

  methods:{

    // es6 문법 
    removeTodo(todoItem , index){
        // const obj = {
        //   todoItem,
        //   index
        // }
        this.$store.commit('removeOneItem',{todoItem, index});
       // this.$emit('removeItem' ,todoItem,index);
        
    },
    // es5 문법
    toggleComplete : function(todoItem ,index){
        this.$store.commit('toggleCompleted' ,{todoItem,index})
      //this.$emit('toggleItem', todoItem, index)
      

    }
  },
  

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

/* 리스트 아이템 트랜지션 효과  */

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

</style>