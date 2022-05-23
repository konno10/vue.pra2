<template>
  <div>
    <ul>
      <li>チーム名 ......{{Heros.data.squadName}}</li>
      <li>活動範囲 ......{{Heros.data.homeTown}}</li>
      <li>結成 ......{{Heros.data.formed}}</li>
      <li>拠点 ......{{Heros.data.secretBase}}</li>
      <li>活動しているか ......{{Heros.data.active}}</li>
      <li>隊員 ......<br>
        <ul v-for="(member,index) in Heros.data.members" :key="index">
          <li>名前 ......{{member.name}}</li>
          <li>年齢 ......{{member.age}}</li>
          <li>正体 ......{{member.secretIdentity}}</li>
          <li>能力 ......
            <ul>
              <li v-for="(skill,index) in member.powers" :key="index">{{skill}}</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
     <pre>{{$data}}</pre>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      Heros:[],
    }
  },
  mounted(){
    axios.get("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
  .then((response) => {
    this.Heros = (response);
  })
}
}
</script>

<style scoped>
li{
  list-style: none;
  text-align: left;
}

</style>