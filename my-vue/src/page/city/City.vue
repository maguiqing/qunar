<template>
  <div>
    <router-link tag="h1" to="/">返回</router-link>
	<div class="wrapper">
       <ul>
	   	 <li v-for="(item,index) in city" 
       @click="setCityAfterFiveSeconds(item)" 
       :key="index">{{item}}</li>
	   </ul>
	</div>
  </div>
</template>
<script >
import Vue from 'vue'
import { mapMutations,mapActions } from 'vuex'
	export default{
       data(){
       	 return{
       	 	city:["北京","上海","广州","深圳","成都"]
       	 }
       },
       methods:{
          // ...mapActions(['setCityAfterFiveSeconds'])
          setCityAfterFiveSeconds(city){
            this.$store.dispatch("setCityAfterFiveSeconds",city)
          }
          /*handleCityChange(city){
            this.$store.commit('changeCity',city)
             console.log(city)
          }*/
       }
	}
</script>
<style scoped>
     h1{
     	line-height: .5rem;
     	font-size: .18rem;
     	background: #ccc;
     }
	 .wrapper{
	 	text-align: center;
	 }
	 .wrapper li{
	 	padding:.2rem 0;
	 	border-bottom:1px solid #ccc;
	 }
</style>