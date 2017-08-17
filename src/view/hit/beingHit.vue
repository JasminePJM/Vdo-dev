
<template>
    <div>
         <!-- 海报轮播 -->
              <div class="poster">
                <mt-swipe :auto="10000">
                  <mt-swipe-item>
                         <img src="../../assets/img/战狼2海报.jpg">
                  </mt-swipe-item>
                  <mt-swipe-item>
                         <img src="../../assets/img/杀破狼海报.jpg">
                  </mt-swipe-item>
                  <mt-swipe-item>
                         <img src="../../assets/img/破局海报.jpg">
                  </mt-swipe-item>
                </mt-swipe>
              </div>
              <!-- 正在热映电影列表 -->
              <div class="movie-list">
                  <router-link to='/detail'>
                      <div class="movie-item" v-for='Item in jsondata.subjects'>
                          <!-- 电影子块海报 -->
                        <div class="item-poster">
                          <img v-bind:src="Item.images.small">
                        </div>
                        <!-- 电影子块文字内容 -->
                        <div class="item-content">
                          <p>{{Item.title}}</p>
                          <div class="score-box">
                            <Star class='star-box' :rating="Item.rating.average" v-if="Item.rating.average"></Star>
                            <span v-if="Item.rating.average">{{Item.rating.average}}</span>
                          </div>
                          
                          <p>导演：&nbsp{{Item.directors[0].name}}</p>
                          <p>主演：&nbsp<span v-for='casts in Item.casts'>{{casts.name}}/</span></p>

                          <p>{{Item.collect_count}}人看过</p>
                        </div>
                        <!-- 电影子块购买按钮 -->
                        <div class="item-btn">
                          <mt-button plain size="small" v-if='Item.rating.average'>购买</mt-button>
                          <mt-button plain class='btn-yellow' size="small" v-else>预售</mt-button>
                        </div>
                      </div>
                  </router-link>
              
              </div>
              <div class="test"></div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import jsonp from '@/Js/json.js'

    import { Swipe, SwipeItem } from 'mint-ui';
    import { Button } from 'mint-ui';

    Vue.component(Button.name, Button);
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);

    import { api } from '@/global/api.js'  //导入静态资源'
    import Star from '@/components/star' //导入星星打分组件
    export default
        {
            created() {
                this.request();
            },
            mounted(){
                // this.getData();
            },
            data() {
                return {
                    currentPage: 0,
                    jsondata: {},
                    countPage: 0
                }
            },
            components:{
                Star:Star
            },
            methods: {
                request() {
                    this.currentPage = this.$route.params.page;
                    jsonp('https://api.douban.com/v2/movie/in_theaters', {}, function (data) {
                        this.jsondata = data;
                        console.log(this.jsondata);
                    }.bind(this));
                   
                }
            },
            watch: {
                //监测$route对象，如果发生改变，就触发request方法
                "$route":'request'
            }
        }
</script>
<style scoped>
.test{
  width: 100%;
  height: 300px;
}
.poster{
  width: 100%;
  height: 155px;
  /*border: 1px solid #000;*/
  box-sizing: border-box;
  margin-top: 5px;
  margin-bottom: 20px;
}
.poster img{
  width: 100%;
  height: 155px;
}
.movie-list{
  width: 100%;
  height: auto;
  /*border: 1px solid #000;*/
  box-sizing:border-box;
}
.movie-item{
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #ccc;
  padding: 15px 5px 15px 10px;
  box-sizing:border-box;
}
/*电影列表海报小图*/
.item-poster{
  width: 25%;
  height: 115px;
  /*border: 1px solid #000;*/
  float: left;
}
.item-poster img{
  width: 100%;
  height: 115px; 
}
/*电影列表文字内容*/
.item-content{
  width: 55%;
  height: 115px;
  /*border: 1px solid #000;*/
  float: left;
}
.item-content p:nth-child(1){
    margin-left: 15px;
    margin-bottom: 5px;
    font-weight: bolder;
}
.star-box{
  margin-left: 15px;
  margin-bottom: 6px;
  width: 75px;
  float: left;
}
.score-box{
  width: 100%;
  height: 19px;
  font-size: 13px;
  color:#777676
}
.item-content p:nth-child(3),.item-content p:nth-child(4){
    margin-left: 15px;
    margin-bottom: 3px;
    font-size: 13px;
    color:#777676;
}
.item-content p:nth-child(5){
    margin-left: 15px;
    margin-bottom: 5px;
    font-size: 13px;
}


/*电影列表购买按钮*/
.item-btn{
  width: 18%;
  height: 115px;
  /*border: 1px solid pink;*/
  float: left;
  box-sizing:border-box;
  padding-top: 40px;
  padding-left: 5px;
}
.mint-button--default.is-plain {
    border: 1px solid #d02f5e;
    color: #d02f5e;
}
.btn-yellow{
  border: 1px solid #d09f38 !important;
    color: #d09f38 !important;
}
.mint-button--small {
    font-size: 12px;
    padding: 0 15px;
    height: 30px;
    font-weight: bold;
}
/*路由链接*/
a:-webkit-any-link {
    color: inherit;
    cursor: auto;
    text-decoration: underline;
}
</style>
   

