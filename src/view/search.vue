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
             <img v-bind:src="Item.images.small">
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
      jsondata: {},
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
        jsonp('https://api.douban.com/v2/movie/search'+'?q='+name, {}, function (data) {
            // loading.close();//结束loading效果
            this.jsondata = data;
            console.log('搜索',this.jsondata);
        }.bind(this));
       
    },
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
<style scoped>
.input-box{
  width: 100%;
  height: auto;
  padding: 6px 10px;
  box-sizing:border-box;
  background: #243150;
}
.input{
  width: 85%;
}
.cancel{
  color: #fff;
  margin-left: 10px;
}
.el-input__inner:focus{
  border-color: #666 !important;
}
a:-webkit-any-link{
  text-decoration: none !important;
}

/*电影列表*/
.movie-list{
  width: 100%;
  height: 500px;
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
.item-content p:nth-child(2),.item-content p:nth-child(3){
    margin-left: 15px;
    margin-bottom: 3px;
    font-size: 13px;
    color:#777676;
}
.item-content p:nth-child(4){
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
  padding: 12px 20px;
  font-size: 14px;
  border-bottom: 1px solid #d9d9d9;
}
.rank-title{
  width: 100%;
  background: #eae6e6;
  height: auto;
  padding: 12px 20px;
  font-size: 14px;
  color:#8391a5;
  box-sizing:border-box;
}
</style>