<template>
	<div>
	    <!-- <mt-tabbar fixed>
         <mt-tab-item id="hit" @click.native.prevent="selected = 'tab-container1'">    
           <img slot="icon" src="../assets/icon/电影.png">
           热映  
         </mt-tab-item>
         
         <mt-tab-item id="find" @click.native.prevent="selected = 'tab-container2'">
           <img slot="icon" src="../assets/icon/眼睛.png">
           找片
         </mt-tab-item>
         <mt-tab-item id="me" @click.native.prevent="selected = 'tab-container3'">
           <img slot="icon" src="../assets/icon/用户.png">
           我的
         </mt-tab-item>
       </mt-tabbar> -->


      <!--  <div class="page-tab-container">  
          <mt-tab-container class="page-tabbar-tab-container" v-model="selected" swipeable>  
            <mt-tab-container-item id="tab-container1">  --> 
                <!-- cell组件 -->    
                  <IsHit></IsHit>
              
           <!--  </mt-tab-container-item>  
            <mt-tab-container-item id="tab-container2">  --> 
                <!-- cell组件 -->  
           <!--      
            </mt-tab-container-item>  
            <mt-tab-container-item id="tab-container3">   -->
                <!-- cell组件 -->  
             <!--  <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>  
            </mt-tab-container-item>  
          </mt-tab-container>  
        </div>   -->


	</div>	
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);


import IsHit from '@/view/hit/IsHit'

export default {
  data: function(){
    return {
      selected:'tab-container1'
    }
  },
  components:{
     IsHit:IsHit
  },
  watch:{
    selected: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定
        console.log(val);
    }
  } 
 
}
</script>
<style scoped>
.fa-2x{
   font-size: 2.3em;
}
.mint-tabbar > .mint-tab-item.is-selected {
    background-color: #eaeaea;
    color: #000;
}
.mint-tabbar > .mint-tab-item {
    color: #969494;
}
</style>