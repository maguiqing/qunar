<template>
  <div class="article">
     <header class="header">
       <div class="back"><i class="iconfont icon-xiangzuojiantou"></i></div>
       <div class="search"><i class="iconfont icon-gouwuchekong"></i><input type="text" placeholder="输入城市/景点/游玩主题" /></div>
       <div class="city" @click="handleCity">{{city}}<i class="iconfont icon-xiajiantou"></i></div>
     </header>
     <index-swiper class="articleBottom" :swiperInfo="swiperInfo"></index-swiper>
     <swiper :options="iconsOption">
         
       <swiper-slide v-for="(pageInfo,index) in pages" :key="index">
        <div class="icon-wrapper">
         <div v-for="item in pageInfo" :key="item.id" class="icon-item">
             
               <router-link :to="'/detail/'+item.id" tag="div" class="img-icon">
                <img  class="icon" :src="item.imgurl">
               </router-link>
             
         </div>
        </div>
       </swiper-slide>
       <div class="swiper-pagination"  slot="pagination"></div>
     </swiper>
     <scroller class="recon">
       
           <li>1</li>
           <li>2</li>
           <li>3</li>
           <li>4</li>
           <li>5</li>
      
     </scroller>
     <div @click="handleClick" ref="con">{{name}}</div>
     <div class="positionIcon">回到顶部</div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import Vue from 'vue'
import IndexSwiper from './Swiper'
import Scroller from 'components/scroller/scroller'
export default {
  name: 'Index',
  data () {
    return {
       swiperInfo:[],
       iconInfo:[],
        iconsOption:{
          pagination:'.swiper-pagination'
        },
        name:"dell"

    }
  },
  components:{
    IndexSwiper,
    Scroller
  },
 computed:{
     ...mapState(['city']),
    /*city(){
      return this.$store.getters.tripleCity
    }*/
    // ...mapGetters({city:'tripleCity'}),
    pages() {
      const pages=[]
      this.iconInfo.forEach((value,index)=>{
        let page=Math.floor(index / 8)
        if(!pages[page]){
          pages[page]=[]
        }
        pages[page].push(value)
      })
      return pages
    }

  },
  
  methods:{
    getIndexData:function(){
        this.$http.get('/api/index.json').then(
        this.handleDataSource.bind(this)
      )
    },
    handleDataSource:function(res){
      const body=res.body
      if(body && body.data && body.data.swiper){
       this.swiperInfo=body.data.swiper
       this.iconInfo=body.data.icons
      }
    },
    handleClick:function(){
       this.name="lee"
       this.$nextTick(()=>{
        console.log(this.$refs.con.innerHTML)
       })
       
    },
    handleCity(){
      this.$router.push("/city")
    },
    bindScroll(){
  
   /* var sTop= document.documentElement.scrollTop || document.body.scrollTop
  var positionIcon=document.getElementsByClassName("positionIcon")[0]
      if(sTop>0){
         console.log(0)
        positionIcon.style.display="block";
      }*/
     if($(window).scrollTop()>0){
        $(".positionIcon").css("display","block")
        $(".positionIcon").click(()=>{
          $(".positionIcon").css("display","none")
          $(window).scrollTop(0)
        })
     }
     if($(window).scrollTop()>44){
      $(".header").css("top",0)
     }
      
      
     
    }
  },
  created(){
    this.getIndexData(),
   
      // window.addEventListener("scroll",this.bindScroll)
    $(window).scroll(this.bindScroll)
  }

}
</script>

<style scoped>
 /*   .article{
  width: 100%;
  height: 100%;
  position:relative;
 } */
   .header{
    display: flex;
    height: .86rem;
    width: 100%;
    background: #05bad5;
    color: #fff;
    position: fixed;
    top:0;
    left:0;
    z-index: 999;
   }
   .header .iconfont{
    font-size: .20rem;
   }
   .back{ 
    width: .64rem;
    line-height: .86rem;
    text-align: center;

   }
   .search{
    flex: 1;
    display: flex;
    align-items: center;
    margin: .14rem .18rem;
    background: #fff;
    border-radius: .1rem;
   }
   .search .icon-gouwuchekong{
    margin: 0 .13rem;
    color:#999;
   }
   .search input{
    border: 0;
    border-radius: .1rem;
    outline: 0;
   }
   .search input::-webkit-input-placeholder{
    color:#999;
   }
   .city{
    line-height: .86rem;
    text-align: center;
    
   }
   .city i{
    margin-left: .05rem;
   }
   .icon-wrapper{
    display: flex;
    flex-wrap: wrap;
    

   }
   .icon-item{
    box-sizing: border-box;
    width: 25%;
    padding:.2rem .4rem;
   }
   .img-icon{
    width: 100%;
   }
   .icon{
    width: 100%;
   }
   .recon{
   	width: 100%;
    height: 8rem;
    overflow: hidden;
   }
   .recon li{
    padding:.8rem;
    background: #ccc;
    text-align: center; 
   }
   .positionIcon{
     position: absolute;
     bottom:.5rem;
     right:.5rem;
     color:#f00;
     width: .8rem;
     height: .8rem;
     border:1px solid #f00;
     border-radius: 50%;
     display: none;
   }
   .articleBottom{
    padding-top: .86rem;
   }
</style>