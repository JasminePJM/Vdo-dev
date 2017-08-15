<template>
	<div>
	    <div class="top-nav">
	    	<div class="top-site">
	    		<span>广州</span>
	    		
	    	</div>
	    	<div class="top-search">
	    	 	<mt-search v-model="searchValue"></mt-search>
	    	</div>
	    	

	    	
	    </div>
	   
	    
	</div>	
</template>

<script>
import Vue from 'vue'
import { Search } from 'mint-ui';

Vue.component(Search.name, Search);
export default {
  data: function(){
    return {
    	searchValue:''
    }
  },
 
}
</script>
<style scoped>
.top-nav{
	width: 100%;
	height: auto;
}
.top-site{
	width: 12%;
	float: left;
}
.top-search{
	width: 88%;
	float: left;
}
</style>