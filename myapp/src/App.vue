<template>
  <div id="app">
  		<x-header :left-options="{showBack:false}">
  			<span class="span1"><img src="./assets/logo_2x.png" height="29" width="60" alt=""></span>
  			<span class="span2"><img src="./assets/research_2x.png" height="26" width="26" alt=""></span>
  		</x-header>
   <sticky scroll-box="vux_view_box_body" :offset="46" :check-sticky-support="false">
        <tab :line-width="1">
          <tab-item selected><router-link to="/"><i class="fa fa-newspaper-o fa-fw"></i>推荐</router-link></tab-item>
          <tab-item><router-link to="/hello"><i class="fa fa-video-camera "></i>排行</router-link></tab-item>
           <tab-item selected><router-link to="/fenlei"><i class="fa fa-book fa-fw"></i>分类</router-link></tab-item>
        </tab>
      </sticky>
    <router-view></router-view>
    <div class="foot">
    	<p><img src="./assets/buka_foot_logo.png" height="100%" width="100%" alt=""></p>
    	<p class="span1">安装APP</p>
    </div>
  </div>
</template>

<script>
import { Flexbox , FlexboxItem, Swiper, SwiperItem ,Sticky  ,Tab, TabItem } from 'vux'
import { XHeader , CellBox } from 'vux'
export default {
  components: {
    XHeader,
    SwiperItem,
    Flexbox,
    FlexboxItem,
    CellBox,
    Swiper,
    Sticky,
	Tab,
	TabItem
  }
}
</script>

<style lang="less">
#app .vux-header{background:#fff}
a{color:#000}
.foot{height:20vh;width:100%}
.foot p{width:40%; height:25%;margin:10% auto;}
.foot .span1{width:30%;height:30%;background:orange;color:#fff;text-align: center;border-radius: 5px;line-height:40px}
.fa{display:block!important;margin-left:6px}
.flex-demo {
  text-align: center;
  color: #000;
  border-radius: 4px;
  margin: 10px 0;
  background-clip: padding-box;
}
#app .vux-header .vux-header-title{margin:0 10px;}
.vux-header .vux-header-title .span1{float:left;}
.vux-header .vux-header-title .span2{float:right;}
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
