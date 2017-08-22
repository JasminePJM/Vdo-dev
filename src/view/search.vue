<template>
  <div>
     <div class="input-box">
        <el-input class='input' 
          placeholder="电影/电视剧/影人"
          icon="search"
          v-model="movelName"
          @keyup.enter.native="request" >
        </el-input>
        <span class='cancel' @click='goback'>取消</span>
     </div>

     <div class="movie-list" v-if='search'>
      <div class="movie-item" v-for='Item in jsondata.subjects'>
         <router-link :to="{path:'/detail/'+Item.id}">
              <!-- 电影子块海报 -->
           <div class="item-poster">
             <img v-bind:src="Item.images.large">
           </div>
           <!-- 电影子块文字内容 -->
           <div class="item-content">
             <p>{{Item.title}}</p>
             <p>导演：&nbsp<span v-for='dire in Item.directors'>{{dire.name}}/</span></p>
             <p>主演：&nbsp<span v-for='casts in Item.casts'>{{casts.name}}/</span></p>
             <p>{{Item.collect_count}}人想看</p>
           </div>
           <!-- 电影子块购买按钮 -->
           <div class="item-btn">
             <mt-button plain class='btn-yellow' size="small">想看</mt-button>
           </div>
         </router-link>
       
      </div>
    </div>
    <div v-else class="rank">
      <div class="rank-title">新片榜</div>
        <div class="rank-list" v-for='(Item,index) in rank.subjects'>
           <router-link :to="{path:'/detail/'+Item.id}">
              {{index+1}}&nbsp&nbsp&nbsp{{Item.title}}
           </router-link>
        </div>
    </div>





     
      
  </div>  
</template>

<script>
import Vue from 'vue'
import jsonp from '@/Js/json.js'

import { Search } from 'mint-ui';

Vue.component(Search.name, Search);

export default {
  created() {
      this.getRank();
  },
  data: function(){
    return {
<<<<<<< HEAD
    	jsondata: {},
=======
      jsondata: {},
>>>>>>> 129198bef02b2fc2c3d14870a5012be4d5ffcdcf
      movelName:'',
      rank:'',
      search:0
    }
  },
  methods:{
    goback(){
       this.$router.go(-1);
    },
    request(){
        let name=this.movelName;
        if(name!=''){
           this.search=1;
        }else{
          this.search=0;
        }
<<<<<<< HEAD
        console.log('========');
  	    jsonp('https://api.douban.com/v2/movie/search'+'?q='+name, {}, function (data) {
            // loading.close();//结束loading效果
  	        this.jsondata = data;
  	        console.log('搜索',this.jsondata);
  	    }.bind(this));
       
  	},
=======
        jsonp('https://api.douban.com/v2/movie/search'+'?q='+name, {}, function (data) {
            // loading.close();//结束loading效果
            this.jsondata = data;
            console.log('搜索',this.jsondata);
        }.bind(this));
       
    },
>>>>>>> 129198bef02b2fc2c3d14870a5012be4d5ffcdcf
    getRank(){
      jsonp('https://api.douban.com/v2/movie/in_theaters', {count:10}, function (data) {
          this.rank = data;
          console.log('排名',this.rank);
      }.bind(this));
    }
  },
  watch: {
      //监测$route对象，如果发生改变，就触发request方法
      "$route":'request'
  }
 
}
</script>
<style>
.input-box{
  width: 100%;
  height: auto;
  padding: 0.12rem 0.12rem;
  box-sizing:border-box;
  background: #243150;
<<<<<<< HEAD
  margin-top:-0.6rem;

=======
>>>>>>> 129198bef02b2fc2c3d14870a5012be4d5ffcdcf
}
.input{
  width: 87.5%;
}
.cancel{
  color: #fff;
  margin-left: 0rem;
  font-size: 0.3rem;
}
.el-input__inner:focus{
  border-color: #666 !important;
}
a:-webkit-any-link{
  text-decoration: none !important;
}
.el-input__inner {
    border-radius: 0.08rem;
    font-size: 0.26rem;
    height: 0.72rem;  
    padding: 3px 0.2rem;
}
.el-input__icon {
    width: 0.7rem;
    font-size: 0.26rem;
}


/*电影列表*/
.movie-list{
  width: 100%;
  height: auto;
  /*border: 1px solid #000;*/
  box-sizing:border-box;
}
.movie-item{
  width: 100%;
  height: 3.55rem;
  border-bottom: 1px solid #ccc;
  padding: 15px 0.1rem 0.6rem 0.2rem;
  box-sizing:border-box;
}
/*电影列表海报小图*/
.item-poster{
  width: 28%;
  height: 3rem;
  /*border: 1px solid #000;*/
  float: left;
}
.item-poster img{
  width: 100%;
  height: 3rem; 
}
/*电影列表文字内容*/
.item-content{
  width: 51%;
  height: 2.3rem;
  /*border: 1px solid #000;*/
  float: left;
}
.item-content p:nth-child(1){
    margin-left: 0.3rem;
    margin-bottom: 5px;
    font-weight: bolder;
    font-size: 0.35rem;
    margin-bottom: 0.3rem;
}
.item-content p:nth-child(2),.item-content p:nth-child(3){
    margin-left: 0.3rem;
    margin-bottom: 3px;
    font-size: 0.26rem;
    color:#777676;
}
.item-content p:nth-child(4){
    margin-left: 0.3rem;
    margin-bottom: 5px;
    font-size: 0.26rem;
}


/*电影列表购买按钮*/
.item-btn{
  width: 17%;
  height: 2.3rem;
  /* border: 1px solid pink; */
  float: left;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-top: 0rem;
  padding-left: 0.1rem;
  margin-left: 0.2rem;
}
.mint-button--default.is-plain {
    border: 0.02rem solid #d02f5e;
    color: #d02f5e;
}
.btn-yellow{
    border: 0.02rem solid #d09f38 !important;
    color: #d09f38 !important;
    border-radius: 0.08rem;
}
.mint-button--small {
    font-size: 0.24rem;
    padding: 0 0.3rem;
    height: 0.6rem;
    font-weight: bold;
}
/*路由链接*/
a:-webkit-any-link {
    color: inherit;
    cursor: auto;
    text-decoration: underline;
}
/*排行榜*/
.rank{
  width: 100%;
  height: auto;
 /* padding: 10px 20px;*/
  box-sizing:border-box;
  /*border: 1px solid #000;*/
}
.rank-list{
  width: 100%;
  height: auto;
<<<<<<< HEAD
  padding: 0.24rem 0.4rem;
  font-size: 0.28rem;
=======
  padding: 12px 20px;
  font-size: 14px;
>>>>>>> 129198bef02b2fc2c3d14870a5012be4d5ffcdcf
  border-bottom: 1px solid #d9d9d9;
}
.rank-title{
  width: 100%;
  background: #eae6e6;
  height: auto;
<<<<<<< HEAD
  padding: 0.24rem 0.4rem;
  font-size: 0.28rem;
=======
  padding: 12px 20px;
  font-size: 14px;
>>>>>>> 129198bef02b2fc2c3d14870a5012be4d5ffcdcf
  color:#8391a5;
  box-sizing:border-box;
}
</style>