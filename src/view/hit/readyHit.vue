<template>
	<div>
	    <div class="nav-select">
	    	
	    		<span class='nav-left'>全部</span>
	    		<span class='nav-left'>8月</span>
	    		<span class='nav-left'>9月</span>
	    		<span class='nav-left'>10月</span>
	    	
	    	    <span class='nav-right'>热度</span>
	    	    <span class='nav-right'>时间</span>
	    		<span class='nav-right'>|</span>
	    		    	
	    </div>

      <br/>
	    <!-- 正在热映电影列表 -->
	     <div class="movie-list">
	    	<div class="movie-item" v-for='Item in jsondata.subjects'>
          <router-link :to="{path:'/detail/'+Item.id}">
               <!-- 电影子块海报 -->
            <div class="item-poster">
              <img v-bind:src="Item.images.medium">
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
      <div class="test"></div>
      
	    
	</div>	
</template>

<script>
import jsonp from '@/Js/json.js'//引入接口

import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
import { Button } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import { api } from '@/global/api.js'  //导入静态资源'
export default {
  created() {
      this.request();
  },
  data: function(){
    return {
    	selected:'1',
      jsondata:{},
    	movieItem:[
         	{
         		imgSrc:"",
         		movieName:"",
         		director:"",
         		actor:"",
         		browseTimes:null,
         		ticket:null,
         		average:null
         	}
    	]

    }
  },
  methods:{
  	    getData:function(){
  	    	let data=this;
  	    	Vue.http.get(api.beingHit).then(function(respone){
  	    		data.movieItem=respone.data.movieItem;
  	    	})
  	    },
        request() {
            let loading = Vue.prototype.$loading({text:"玩命加载中..."});
            jsonp('https://api.douban.com/v2/movie/coming_soon', {}, function (data) {
                loading.close();//结束loading效果
                this.jsondata = data;
                console.log(this.jsondata);
            }.bind(this));
           
        }
  },
  watch: {
      //监测$route对象，如果发生改变，就触发request方法
      "$route":'request'
  },
  mounted(){
  	// this.getData();
  }
 
}
</script>
<style scoped>
/*即将上映时间筛选*/
.nav-select{
	width: 100%;
	height: 30px;
	/*border: 1px solid red;*/
  border-bottom: 1px solid #ccc;
	box-sizing:border-box;
}
.nav-left{
	float: left;
  font-size: 14px;
  margin: 4px 7px;
  color: #949292;
}
.nav-right{
	float:right;
	font-size: 14px;
  margin: 4px 7px;
  color: #949292;
}
.mint-tab-item {
  display: block;
  padding: 10px 0;
  width: 80px;
  flex: 0; 
  text-decoration: none;
  margin: 5px 30px;
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
  border: 1px solid orange !important;
    color: orange !important;
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
.test{
  width: 100%;
  height: 500px;
}
</style>