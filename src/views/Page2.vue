<template>
   <div class="loading">
      <button @click="loading=!loading">load</button>
      <vue-loading v-if="loading" type="spin" color="#333" :size="{ width: '50px', height: '50px'}"></vue-loading>
   </div>
</template>

<script>
import {VueLoading} from 'vue-loading-template';
export default {
 components:{
   VueLoading
 },
 data(){
   return{
     loading:false,
   };
 }
}
</script>

<style>

</style>
