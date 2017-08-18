<template>
	<div>
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
              <img src='../../assets/icon/空星.png' width="12">
              <img src='../../assets/icon/空星.png' width="12">
              <img src='../../assets/icon/空星.png' width="12">
              <img src='../../assets/icon/空星.png' width="12">
              <img src='../../assets/icon/空星.png' width="12">

            </mt-button>
         </div>
         <div class="movie-ticket">
            <img src="../../assets/icon/电影票.png" width="20">
            <span style="font-weight:bold;margin-right:5px;color:#515151;font-size:15px;">选票购票</span>
            <img src="../../assets/icon/右.png" style="float:right;width:17px;margin-right:18px;">
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
                      <div class="swiper-slide">
                          <div class='actor-content'>
                            <img src="../../assets/img/吴京.jpg" width="100%">
                              <p>吴京</p>
                              <p>饰：冷锋</p>
                          </div>
                          <div class='actor-content'>
                            <img src="../../assets/img/弗兰克.jpg" width="100%">
                              <p>弗兰克·格里罗</p>
                              <p>饰：老爹</p>
                          </div>  
                          <div class='actor-content'>
                            <img src="../../assets/img/吴刚.jpg" width="100%">
                              <p>吴刚</p>
                              <p>饰：何建国</p>
                          </div>
                      </div>
                      <div class="swiper-slide">
                         <div class='actor-content'>
                           <img src="../../assets/img/张翰.jpg" width="100%">
                             <p>张翰</p>
                             <p>饰：卓亦凡</p>
                         </div>
                         <div class='actor-content'>
                           <img src="../../assets/img/Jade.jpg" width="100%">
                             <p>卢靖姗</p>
                             <p>饰：Rechel</p>
                         </div>  
                         <div class='actor-content'>
                           <img src="../../assets/img/吴京.jpg" width="100%">
                             <p>吴京</p>
                             <p>导演</p>
                         </div>
                      </div>
                     
                  </div>
              </div>


          </div>
      </div>
       
      <!-- 预告片/剧照 -->
      <div class="actor">
          <p class="title">预告片/剧照</p>
          <div>
              <div class="swiper-container">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide">
                          <div class='photo'>
                            <img src="../../assets/img/剧照1.jpg" width="100%">
                          </div>
                          <div class='photo'>
                            <img src="../../assets/img/剧照6.jpg" width="100%" height="114">
                          </div>
                         
                      </div>
                      <div class="swiper-slide">
                          <div class='photo'>
                            <img src="../../assets/img/剧照2.jpg" width="100%" height="114">
                          </div>
                          <div class='photo'>
                            <img src="../../assets/img/剧照3.jpg" width="100%" height="114">
                          </div>
                      </div>
                      <div class="swiper-slide">
                          <div class='photo'>
                            <img src="../../assets/img/剧照4.jpg" width="100%" height="114">
                          </div>
                          <div class='photo'>
                            <img src="../../assets/img/剧照5.jpg" width="100%" height="114">
                          </div>
                      </div>
                     
                  </div>
              </div>


          </div>
      </div>
	    
	</div>	
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui';
import { api } from '@/global/api.js'  //导入静态资源'
import Star from '@/components/star' //导入星星打分组件
import Swiper from '../../../static/Js/swiper-3.4.2.min.js'//导入Swiper插件
import jsonp from '@/Js/json.js'//导入插口

Vue.component(Header.name, Header);

export default {
  created() {
      this.request();
  },
  data: function(){
    return {
         jsondata:{},
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
    Star:Star
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
        direction: 'horizontal',
        loop: false,
      })
            
  }
 
}
</script>
<style scoped>
/*简介部分*/
.introduction{
  width: 100%;
  height: auto;
  /*border: 1px solid #000;*/
  box-sizing: border-box;
  margin-top: 8px;
  padding:20px 15px 0;
}
.title{
  font-size:13px;
  color: #777676;
  margin-bottom: 12px;
}
.intro-content1,.intro-content2{
  font-size: 14px;
  letter-spacing: 1px;
}
/*影人部分*/
.actor{
  width: 100%;
  height: 230px;
  margin-top: 20px;
  padding:0px 0px 0px 15px;
  /*border: 1px solid #000;*/
  box-sizing: border-box;
}
.actor-content{
  width: 30%;
  height: auto;
  /*border:1px solid #000;*/
  text-align: center;
  float: left;
  margin-right: 9px;
}
.actor-content p:nth-child(2){
  font-size: 13px;
}
.actor-content p:nth-child(3){
  font-size: 12px;
  color:  #777676;
  line-height: 1.5;
}
/*预告片*/
.photo{
  width: 47%;
  margin-right: 9px;
  float: left;
}








/*头部*/
.mint-header {   
  background-color: rgba(24, 29, 26, 0.94);
  font-size: 16px;
}
/*海报部分*/
.div-poster{
  width: 100%;
  height: auto;
  background: rgba(24, 29, 26, 0.94);
  padding:15px 0;
  text-align: center;
}
.poster{
  width: 200px;
  height: auto;
  /*border: 1px solid #fff;*/
  margin:0 auto;
}
.poster img{
  width: 100%;
}
/*电影简介*/
.movie-head{
  width: 100%;
  height: 230px;
  /*border: 1px solid #000;*/
  box-sizing: border-box;
}
.movie-score{
  width: 100%;
  height: 120px;
  /*border: 1px solid red;*/
  box-sizing: border-box;
}
.score-left{
  width: 74%;
  height: 120px;
  /*border: 1px solid red;*/
  box-sizing: border-box;
  padding: 20px 15px;
  float: left;
}
.score-left p:nth-child(1){
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 8px;
}
.score-left p:nth-child(2),.score-left p:nth-child(3),.score-left p:nth-child(4){
  font-size: 12px;
  color: #777676;
}
.score-right{
  width: 25%;
  height: 120px;
  /*border: 1px solid #000;*/
  box-sizing: border-box;
  padding: 20px 0px;
  float: left;
}
.score-box{
  width: 80px;
  height: 100px;
  /*border: 1px solid #000;*/
  box-shadow: 0px 0px 20px #8c8b8b;
  text-align: center;
  box-sizing: border-box;
  padding:5px 5px;
}
.score-box p:nth-child(1){
  font-size: 11px;
  color: #777676;
}
.score-box p:nth-child(2){
  font-size: 17px;
  color: #000;
  font-weight: bold;
  margin: 3px 0;
}
.score-box p:nth-child(4){
  font-size: 11px;
  color:#777676;
  margin-top: 5px;
}
.movie-btn{
  width: 100%;
  height: 50px;
  /*border: 1px solid #000;*/
  padding: 10px 15px;
  box-sizing: border-box;
}
.btn-yellow{
  border: 1px solid orange !important;
  color: orange !important;
  font-weight: bolder;
  margin-right: 10px;
  margin-top: 20px;
}
.btn-size1{
  width: 27%;
}
.btn-size2{
  width:65%;
}
.movie-ticket{
  width: 100%;
  height: 50px;
  /*border: 1px solid green;*/
  padding:25px 0px 0px 15px;
  box-sizing: border-box;
  margin-top: 5px;
}
.ticket-right{
  float: right;
  color: red;
  font-size: 12px;
}
</style>