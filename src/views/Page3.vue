<template>
  <div>
    <datepicker v-model="select" :language="ja" clear-button="true" format="yyyy.MM.dd"/>
    <p v-if="select">{{select |moment}}が選択されています</p>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import moment from "moment";
import { ja } from "vuejs-datepicker/dist/locale";

export default {
  // ...
  components: {
    Datepicker
  },
  data(){
    return{
      select:"",
    }
  },
   filters: {
    moment(value) {
      return moment(value).format("y年M月D日");
    }
  },
  computed: {
      ja(){
          return ja;
      }
  }


  // ...
};
</script>

<style scoped>
p {
  text-align: left;
}

</style>