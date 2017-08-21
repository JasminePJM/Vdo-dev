<template>
	<div>
     <div class="Comment-box">
       lalal
     </div>





	   
	    
	</div>	
</template>

<script>
import Vue from 'vue'
import jsonp from '@/Js/json.js'

export default {
  created() {
      this.request();
  },
  data: function(){
    return {
    	jsondata: {}
    }
  },
  methods:{
  	request(){
        let name=this.movelName;
        console.log('========');
  	    jsonp('https://api.douban.com/v2/movie/subject/'+this.$route.params.id+'/comments', {}, function (data) {
            // loading.close();//结束loading效果
  	        this.jsondata = data;
  	        console.log('短评',this.jsondata);
  	    }.bind(this));
  	   
  	},
  watch: {
      //监测$route对象，如果发生改变，就触发request方法
      "$route":'request'
  }
 }
}
</script>
<style scoped>
.Comment-box{
  width: 100%;
  height: auto;
  padding: 20px 15px;
  box-sizing: border-box;
  border:1px solid #000;
}
</style>