<template>
	 <swiper :options="swiperOption"  >
      <!-- slides -->
      <swiper-slide v-for="item in swiperInfo" :key="item.id">
        <div class="swiper-img-con">
          <img @click="handleClick(item.id)" class="swiper-img" :src="item.imgurl">
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
     </swiper>
</template>
<script >
	export default{
		props:['swiperInfo'],
		data(){
			return{
				swiperOption: {
		          autoplay:1000,
		          direction:'horizontal',
		          loop:true,
		          pagination:'.swiper-pagination'
		         
		        }
			}
		},
		methods:{

		    handleClick(id){
		      // this.$router.push("/detail/sight/2")
		      this.$router.push({
		      	name:'sight',
		      	params:{
		      		id:2
		      	},
		      	query:{
		      		name:"dell"
		      	}
		      })
		    }
		}
	}
</script>
<style scoped>
	.swiper-img-con{
     width: 100%;

   }
   .swiper-img{
    width: 100%;
   }
</style>