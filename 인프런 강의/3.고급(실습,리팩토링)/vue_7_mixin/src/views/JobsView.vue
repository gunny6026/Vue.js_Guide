<template>
  <div>
    <list-item></list-item>
</div>
         
</template>

<script>
import ListItem from '../components/ListItem.vue'
import ListMixin from '../mixins/ListMixin';

export default {
  components:{
    ListItem
  },
   mixins: [ListMixin],
    
    created(){
      console.log("jobsview 도착");
    }
  // created(){
  //     bus.$emit('start:spinner');
  //   setTimeout(()=> {

  //  this.$store.dispatch('FETCH_JOBS')
  //   .then( ()=> {
  //       console.log('fetched');
  //     bus.$emit('end:spinner');
  //   })
  //   .catch( (error)=>{console.log(error);});
  //   }, 3000);
  // }
  //  created(){
  //     bus.$emit('start:spinner');
  //   setTimeout(()=> {

  //  this.$store.dispatch('FETCH_LIST', this.$route.name)
  //   .then( ()=> {
  //       console.log('fetched');
  //     bus.$emit('end:spinner');
  //   })
  //   .catch( (error)=>{console.log(error);});
  //   }, 3000);
  // }
}
</script>

<style>

</style>
