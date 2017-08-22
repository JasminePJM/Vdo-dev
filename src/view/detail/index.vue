<template>
<<<<<<< HEAD
	<div id='detail'>
=======
  <div>
>>>>>>> 129198bef02b2fc2c3d14870a5012be4d5ffcdcf
      <!-- 头部 -->
      <mt-header title="电影">
        <!-- <router-link to="/" slot="left"> -->
          <mt-button icon="back" slot='left' @click='goback'></mt-button>
        <mt-button slot="right">
           <img src='../../assets/icon/分享48.png' width="21">
        </mt-button>
      </mt-header>

      <!-- 海报部分 -->
      <div class='div-poster'>
        <div class='poster'>
            <img :src="jsondata.images.large">
        </div>
      </div>

      <!-- 电影评分简介 -->
      <div class="movie-head">
         <div class="movie-score">
           <div class="score-left">
               <p>{{jsondata.title}}</p>
               <p>{{jsondata.year}}/
                  <span v-for='genres in jsondata.genres'>{{genres}}/</span>
               </p>
               <p>上映时间：{{movieItem[0].date}}
                  (<span v-for='countries in jsondata.countries'>{{countries}}/</span>)
               </p>
               <p>片长：{{movieItem[0].time}}</p>
           </div>
           <div class="score-right">
              <div class="score-box">
                <p>豆瓣评分</p>
                <p>{{jsondata.rating.average}}</p>               
                  <Star class='star-box' :rating="jsondata.rating.average"></Star>
                <p v-if='jsondata.rating.average'>{{movieItem[0].browseTimes}}人</p>
                <p v-else>{{jsondata.wish_count}}人想看</p>

              </div>
           </div>
            
         </div>
         <div class="movie-btn">
            <mt-button plain class='btn-yellow btn-size1' size="small">想看</mt-button>
            <mt-button plain class='btn-yellow btn-size2' size="small">看过
              &nbsp
              <img src='../../assets/icon/空星.png' style="width:0.24rem">
              <img src='../../assets/icon/空星.png' style="width:0.24rem">
              <img src='../../assets/icon/空星.png' style="width:0.24rem">
              <img src='../../assets/icon/空星.png' style="width:0.24rem">
              <img src='../../assets/icon/空星.png' style="width:0.24rem">

            </mt-button>
         </div>
         <div class="movie-ticket">
            <img src="../../assets/icon/电影票.png" style="width:0.4rem;">
            <span style="font-weight:bold;margin-right:0.1rem;color:#515151;font-size:0.3rem;">选票购票</span>
            <img src="../../assets/icon/右.png" style="float:right;width:0.34rem;margin-right:0.36rem;">
            <span class="ticket-right">￥27起</span>
         </div>
      </div>
      
      <!-- 电影内容简介 -->
      <div class="introduction">
         <p class="title">简介</p>
         <div class="intro-content1">
         {{jsondata.summary}}
         </div>
      </div>

      <!-- 影人 -->
      <div class="actor">
          <p class="title">影人</p>
          <div>
              <div class="swiper-container">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for='casts in jsondata.casts'>
                          <div class='actor-content' v-for='casts in jsondata.casts'>
                            <img :src="casts.avatars.medium" width="100%">
                              <p>{{casts.name}}</p>
                          </div>
                      </div>  
                  </div>
              </div>


          </div>
      </div>
       
      <!-- 预告片/剧照 -->
     <!--  <div class="actor">
          <p class="title">预告片/剧照</p>
          <div>
              <div class="swiper-container">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide" >
                          <div class='photo'>
                            <img src="../../assets/img/剧照1.jpg" width="100%">
                          </div>
                         
                      </div>
                  </div>
              </div>


          </div>
      </div> -->

<<<<<<< HEAD
     <!-- <mt-navbar v-model="selected">
=======
<!--      <mt-navbar v-model="selected">
>>>>>>> 129198bef02b2fc2c3d14870a5012be4d5ffcdcf
       <mt-tab-item id="1">短评</mt-tab-item>
       <mt-tab-item id="2">影评</mt-tab-item>
     </mt-navbar> -->

     <!-- tab-container -->
    <!--  <mt-tab-container v-model="selected">
       <mt-tab-container-item id="1">
         <Comments></Comments>
       </mt-tab-container-item>
       <mt-tab-container-item id="2">
         <Reviews></Reviews>
       </mt-tab-container-item>
     </mt-tab-container> -->

<<<<<<< HEAD
	    
	</div>	
=======
      
  </div>  
>>>>>>> 129198bef02b2fc2c3d14870a5012be4d5ffcdcf
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui';
import { api } from '@/global/api.js'  //导入静态资源'
import Star from '@/components/star' //导入星星打分组件
import Comments from '@/view/detail/comments.vue'//导入短评组件
import Reviews from '@/view/detail/reviews.vue'//导入短评组件
import Swiper from '../../../static/Js/swiper-3.4.2.min.js'//导入Swiper插件
import jsonp from '@/Js/json.js'//导入插口
import { Navbar, TabItem } from 'mint-ui';//引入mintUI的导航条

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

Vue.component(Header.name, Header);

export default {
  created() {
      this.request();
  },
  data: function(){
    return {
         jsondata:{},
         selected:1,
         movieItem:[
            {
              "movieName":"",
              "average":null,
              "type":"",
              "date":"",
              "place":"",
              "time":""
            }

         ]
    }
  },
  components:{
    Star:Star,
    Comments:Comments,
    Reviews:Reviews
  },
  methods:{
     getData:function(){
        let data=this;
        Vue.http.get(api.beingHit).then(function(respone){
          data.movieItem=respone.data.movieItem;
        })
     },
     goback(){
        this.$router.go(-1);
     },
     request() {
        let loading = Vue.prototype.$loading({text:"玩命加载中..."});
        jsonp('https://api.douban.com/v2/movie/subject/' + this.$route.params.id, {}, function (data) {
            loading.close();//结束loading效果
            this.jsondata = data;
            console.log('详细页',this.jsondata)
        }.bind(this))
    }
  },
  mounted(){
     this.getData();
      var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 30,
        loop:false
      })
            
  }
 
}
</script>
<style>
/*简介部分*/
#detail .introduction{
  width: 100%;
  height: auto;
  /*border: 1px solid #000;*/
  box-sizing: border-box;
  margin-top: 0.16rem;
  padding:0.4rem 0.3rem 0;
}
#detail .title{
  font-size:0.26rem;
  color: #777676;
  margin-bottom: 0.24rem;
}
#detail .intro-content1,.intro-content2{
  font-size: 0.28rem;
  letter-spacing: 0.02rem;
}
/*影人部分*/
#detail .actor{
  width: 100%;
  height: auto;
<<<<<<< HEAD
  margin-top: 0.4rem;
  padding:0px 0px 0px 0.3rem;
=======
  margin-top: 20px;
  padding:0px 0px 0px 15px;
>>>>>>> 129198bef02b2fc2c3d14870a5012be4d5ffcdcf
  /*border: 1px solid #000;*/
  box-sizing: border-box;
}
#detail .actor-content{
  width: 30%;
  height: auto;
  /*border:1px solid #000;*/
  text-align: center;
  float: left;
  margin-right: 0.18rem;
}
<<<<<<< HEAD
#detail .actor-content p:nth-child(2){
  font-size: 0.26rem;
  margin-bottom: 0.3rem;
=======
.actor-content p:nth-child(2){
  font-size: 13px;
  margin-bottom: 15px;
>>>>>>> 129198bef02b2fc2c3d14870a5012be4d5ffcdcf
}
#detail .actor-content p:nth-child(3){
  font-size: 0.24rem;
  color:  #777676;
  line-height: 1.5;
}
/*预告片*/
#detail .photo{
  width: 47%;
  margin-right: 0.18rem;
  float: left;
}
<<<<<<< HEAD
#detail .mint-navbar{
  width: 100%;
  border-bottom: 1px solid #ccc;
  margin-top: 0.4rem;
  background: #eae6e6;

}
#detail .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 1.5px solid #4a4849;
    color: #4a4849;
    margin-bottom: 0px;
    font-size: 0.28rem !important;
}
#detail .mint-navbar .mint-tab-item{
  color: #949292;
  font-size: 0.28rem !important;
}
#detail .mint-navbar .mint-tab-item {
    padding: 0.28rem 0;
=======
.mint-navbar{
  width: 100%;
  border-bottom: 1px solid #ccc;
  margin-top: 20px;
  background: #eae6e6;

}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 1.5px solid #4a4849;
    color: #4a4849;
    margin-bottom: 0px;
    font-size: 14px !important;
}
.mint-navbar .mint-tab-item{
  color: #949292;
  font-size: 14px !important;
}
.mint-navbar .mint-tab-item {
    padding: 14px 0;
>>>>>>> 129198bef02b2fc2c3d14870a5012be4d5ffcdcf
}








/*头部*/
#detail .mint-header {   
  background-color: rgba(24, 29, 26, 0.94);
  font-size: 0.32rem;
}
/*海报部分*/
#detail .div-poster{
  width: 100%;
  height: auto;
  background: rgba(24, 29, 26, 0.94);
  padding:0.3rem 0;
  text-align: center;
}
#detail .poster{
  width: 4rem;
  height: auto;
  /*border: 1px solid #fff;*/
  margin:0 auto;
}
#detail .poster img{
  width: 100%;
}
/*电影简介*/
#detail .movie-head{
  width: 100%;
  height: 4.6rem;
  /*border: 1px solid #000;*/
  box-sizing: border-box;
}
#detail .movie-score{
  width: 100%;
  height: 2.4rem;
  /*border: 1px solid red;*/
  box-sizing: border-box;
}
#detail .score-left{
  width: 74%;
  height: 2.4rem;
  /*border: 1px solid red;*/
  box-sizing: border-box;
  padding: 0.4rem 0.3rem;
  float: left;
}
#detail .score-left p:nth-child(1){
  font-weight: bold;
  font-size: 0.4rem;
  margin-bottom: 0.16rem;
}
#detail .score-left p:nth-child(2),.score-left p:nth-child(3),.score-left p:nth-child(4){
  font-size: 0.24rem;
  color: #777676;
}
#detail .score-right{
  width: 25%;
  height: 2.4rem;
  /*border: 1px solid #000;*/
  box-sizing: border-box;
  padding: 0.4rem 0px;
  float: left;
}
#detail .score-box{
  width: 1.6rem;
  height: 2rem;
  /*border: 1px solid #000;*/
  box-shadow: 0px 0px 0.4rem #8c8b8b;
  text-align: center;
  box-sizing: border-box;
  padding:0.1rem 0.1rem;
}
#detail .score-box p:nth-child(1){
  font-size: 0.22rem;
  color: #777676;
}
#detail .score-box p:nth-child(2){
  font-size: 0.34rem;
  color: #000;
  font-weight: bold;
  margin: 0.06rem 0;
}
#detail .score-box p:nth-child(4){
  font-size: 0.22rem;
  color:#777676;
  margin-top: 0.1rem;
}
#detail .movie-btn{
  width: 100%;
  height: 1rem;
  /*border: 1px solid #000;*/
  padding: 0.2rem 0.3rem;
  box-sizing: border-box;
}
#detail .btn-yellow{
  border: 1px solid orange !important;
  color: orange !important;
  font-weight: bolder;
  margin-right: 10px;
  margin-top: 20px;
  font-size: 0.3rem;
  height: 0.65rem;
}
#detail .btn-size1{
  width: 27%;
}
#detail .btn-size2{
  width:62%;
}
#detail .movie-ticket{
  width: 100%;
  height: 1rem;
  /*border: 1px solid green;*/
  padding:0.5rem 0px 0px 0.3rem;
  box-sizing: border-box;
  margin-top: 5px;
}
#detail .ticket-right{
  float: right;
  color: red;
  font-size: 0.24rem;
}
#detail .mintui {
    font-size: 0.32rem !important;
}
</style>