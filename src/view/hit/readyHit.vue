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
	height: 0.6rem;
  border-bottom: 1px solid #ccc;
	box-sizing:border-box;
}
.nav-left{
	float: left;
  font-size: 0.28rem;
  margin: 4px 0.14rem;
  color: #949292;
}
.nav-right{
	float:right;
	font-size: 0.28rem;
  margin: 4px 0.14rem;
  color: #949292;
}
.mint-tab-item {
  display: block;
  padding: 0.2rem 0;
  width: 1.6rem;
  flex: 0; 
  text-decoration: none;
  margin: 5px 0.6rem;
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
.test{
  width: 100%;
  height: 500px;
}
</style>