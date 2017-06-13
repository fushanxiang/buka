<template>
    <div id="Listtab">
     <mt-navbar v-model="selected">
       <button @click="chooseTab1"> 推荐 </button>
       <button @click="chooseTab2"> 排行 </button>
       <button @click="chooseTab3"> 分类 </button>
    </mt-navbar>
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="http://i-r6.sosobook.cn/auto/appRecom/20161218194517_585676cd6e0ca.jpg" width="100%" height="100%"></mt-swipe-item>
        <mt-swipe-item><img src="http://i-r6.sosobook.cn/auto/appRecom/20161125133328_5837cd28a51e5.jpg"  width="100%" height="100%"></mt-swipe-item>
        <mt-swipe-item><img src="http://i-r6.sosobook.cn/auto/appRecom/20161114165137_58297b19bd8c8.jpg"  width="100%" height="100%"></mt-swipe-item>
      </mt-swipe>
      <mt-tab-container v-model="active">
    <mt-tab-container-item id="tab-container1">
        <div class="zhou">每周推荐</div>
      <mt-cell v-for="item in spliceStr" >
        <router-link :to="{ params:{id:item.id} }"> <img :src="item.cover_url" width="100%" height="100%" alt=""> <p>{{item.title}}</p> </router-link>
      </mt-cell>
      <div class="box-con">最新更新</div>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab-container2">
      <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab-container3">
      <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
    </mt-tab-container-item>
  </mt-tab-container>
</div>
</template>
<script>
import jsonp from "jsonp"
import Vue from "vue"
export default {
  name: 'hello',
  data(){
      return {
        arr:"",
        flag:true,
        active:"tab-container1"
      }
    },
    methods:{
      chooseTab1(){
        this.active = "tab-container1"
      },
      chooseTab2(){
        this.active = "tab-container2"
      },
      chooseTab3(){
        this.active = "tab-container3"
      },
    },
    created(){
      var url = "http://m.ac.qq.com/Recommend/get/?num=6&adpos=910&t=1497338232259&"
      Vue.axios.get(url).then((res)=> {
        return res.data.list
      
      }).then((data)=> {
        //console.log(this)
        this.arr = data

      })
    },
    computed:{
        spliceStr:function(){
           console.log(this.arr)
            this.arr = Array.prototype.slice.call(this.arr); // 
            return this.arr.map(item=>{ 
                return item

             })
        }
    }
}
</script>
<style>
*{margin:0;padding:0;}
html{
  font-size: 15.625vw; /* 100vw/(640/100) =  15.625vw =  50px */
}
#Listtab button{width:30%;border: 0px;background: white;margin:5px 0;font-size: 0.3rem}
.mint-cell-wrapper{
  flex-flow: column wrap!important;
  margin: 5px 0;
  font-size: 0.25rem
}
.mint-cell-wrapper p{margin:5px 0;}
a{color:#000; text-decoration:none; }
.mint-tab-container-item{display: flex;flex-flow: row wrap;}
.mint-cell{width:33%;display: block}
.mint-cell-title{display: none}
.mint-cell-text{ display: block; margin: 10px 0; }
.mint-tab-container-item .zhou{font-size: 0.2rem;display: block;width:100%;margin:5px 10px;}
.mint-tab-container-item .box-con{font-size: 0.2rem;display: block;width:100%;margin:5px 10px;}
</style>
