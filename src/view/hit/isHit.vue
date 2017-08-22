<template>
	<div>
	    <div class="top-nav">
	    	<div class="top-site">
	    		<span>广州</span>
	    		<i class="el-icon-arrow-down"></i>
	    	</div>
	    	<div class="top-search">
	    	 <router-link to='/search'>
	    	 	<el-input
	    	 	  placeholder="电影/电视剧/影人"
	    	 	  icon="search"
	    	 	  v-model="searchInput"
	    	 	   :on-click="searchChange" style='margin:0;'>
	    	 	</el-input>
	    	 	</router-link>
	    	</div>
	    </div>
	    <div class="middle-nav">
	    		<mt-navbar v-model="middleNav">
	    		  <mt-tab-item id="1">正在热映</mt-tab-item>
	    		  <mt-tab-item id="2">即将上映</mt-tab-item>
	    		</mt-navbar>

	    		<!-- tab-container -->
	    		<mt-tab-container v-model="middleNav">
	    		  <mt-tab-container-item id="1">
	    		    <BeingHit></BeingHit>
	    		  </mt-tab-container-item>
	    		  <mt-tab-container-item id="2">
	    		    <ReadyHit></ReadyHit>
	    		  </mt-tab-container-item>
	    		 
	    		</mt-tab-container>

	    	</div>

	   
	    
	</div>	
</template>

<script>
import Vue from 'vue'
import { Search } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Search.name, Search);

import BeingHit from '@/view/hit/beingHit'
import ReadyHit from '@/view/hit/readyHit'
export default {
  data: function(){
    return {
    	searchValue:'',
    	searchInput:'',
    	middleNav:'1'
    }
  },
  methods:{
  	searchChange:function(){

  	}
  },
  components:{
  	BeingHit:BeingHit,
  	ReadyHit:ReadyHit
  }
 
}
</script>
<style>
.top-nav{
	width: 100%;
	height: 0.8rem;	
	/*border:1px solid #000;*/
}
.top-site{
	width: 18%;
    float: left;
    padding: 0.35rem 0.2rem;
    box-sizing: border-box;
    font-size:0.26rem;
    font-family: monospace;
    /*border:1px solid blue;*/

}
.top-search{
	width: 82%;
	float: left;
	height: 0.8rem;
	padding: 3px 0.2rem 3px 0px;
	box-sizing: border-box;
	margin-top:-0.5rem;
}
[class*=" el-icon-"], [class^=el-icon-]{
	font-size:0.2rem;
}

.top-search .el-input__inner {   
    background-color: #eaeaea;
    border: 1px solid #fbfdff;
    height: 0.72rem !important;
    padding: 3px 0.2rem;
}
.el-input {
    font-size: 0.28rem;
}
.el-input__icon {
    width: 0.7rem;
    font-size: 0.24rem;
}
.middle-nav{
	width: 100%;
	height: auto;
	/*border: 1px solid #000;*/
}
.mint-navbar{
	width: 100%;
	border-bottom: 1px solid #ccc;

}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 1.5px solid #4a4849;
    color: #4a4849;
    margin-bottom: 0px;
    font-size: 0.28rem !important;
}
.mint-navbar .mint-tab-item{
	color: #949292;
	font-size: 0.28rem !important;
}
.mint-navbar .mint-tab-item {
    padding: 0.28rem 0;
}
.mint-tab-item-label {
    font-size: 0.24rem !important;
}

</style>