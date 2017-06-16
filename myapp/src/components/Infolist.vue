<template>
	<div id="info-div">
		<div class="info-div1">
			<p class="info-p1"><img src="http://m.buka.cn/static/img/star_2.png" width='40%' height="30%" alt="">
				<span>4.5</span>
			</p>
		
			<img class="info-img1" src="http://i-r6.sosobook.cn/logo/logo5/219392/201611021624/32h.jpg" width="40%" height="100%" alt="">
	
			<p class="info-p1"><img src="http://m.buka.cn/static/img/fire.png" width='40%' height="30%" alt="">
				<span>111万</span>
			</p>

		</div>
			<p class="haha haha1">Comic Rex 131号</p>
			<p class="haha"><a class="haha-a1" href="">一讯社</a></p>
		<flexbox>
	        <flexbox-item>
	          <x-button type="primary">
		          <a href="#" class="info-fla1" on-item-click="clear">添加收藏</a>
	          </x-button>
	        </flexbox-item>
	        <flexbox-item>
	          <x-button type="warn">客户端观看</x-button>
	        </flexbox-item>
	      </flexbox>
		<!-- <div class="Info-div2">
			<button>添加收藏</span>
			<span>客户端观看</span>
		</div> -->
		<p class="info-p2">月刊<span></span>是一迅社发行的少女向月刊漫画杂志。其中包括了《最游记》《魔界王子》《狂欢节》《春之诅咒》《loveless》《雨月》《神幻拍档》等优秀漫画。</p>
		<div class="info-div3">
			<p  class="info-p1"><img src="http://c-r6.sosobook.cn/static/m.buka.cn/img/share_icon.png" alt="" width="30%" height="0%"><span>分享</span></p>
			<p  class="info-p1"><img src="http://c-r6.sosobook.cn/static/m.buka.cn/img/toudi.png" width="30%" height="30%" alt=""><span>投稿</span></p>
			<p  class="info-p1"><img src="http://c-r6.sosobook.cn/static/m.buka.cn/img/comment.png" width="30%" height="30%" alt=""><span>评论(50)</span></p>
			
		</div>
		<p class="info-p2">连载<span>更新时间2016-11-04</span></p>
		<grid :rows="3">
      	<grid-item v-for="item in arr2">
     	 <span class="grid-center"><a href="http://m.ac.qq.com/chapter/index/id/551514/cid/44">{{item.name}}</a></span>
      </grid-item>
    </grid>
	</div>
</template>
<script>
import Vue from "vue"
import { Sticky  ,Tab, TabItem, Flexbox , FlexboxItem, SwiperItem , Grid, GridItem ,XButton, Box, GroupTitle, Group, Divider } from 'vux'
	export default{
		components : {
			Sticky,
			Tab,
			TabItem,
			SwiperItem,
		    Flexbox,
		    FlexboxItem,
		    Grid,
		    GridItem,
		    XButton,
		    Box,
		    GroupTitle,
		    Group,
		    Divider
		},
	  created(){
	  		/*var shuju = window.location.hash.replace("#/Infolist/","")
   			console.log(shuju)
   			var id = shuju.substring(0, 6)

   			var url = "/gethome/get_data";
   			Vue.axios.get(url).then((res)=> {
		        return res.data.datas.items
		      }).then((data)=> {
		        this.arr = data
		       console.log(this.arr)
		      })*/


		   var url = "/comic/chapter?comicName=%E7%81%AB%E5%BD%B1%E5%BF%8D%E8%80%85&skip=&key=ead2ee0e68006bf8afb329a0b52cf96f"
		      Vue.axios.get(url).then((res)=> {
		        return res.data.result.chapterList
		      }).then((data)=> {
		        this.arr2 = data
		       //console.log(this.arr2)
		      })
		 },
	  methods: {
	    clear(){
	    	this.innerHTML= "已收藏"
	    }
	  },
	  data () {
	    return {
	      submit001: 'click me',
	      disable001: false,
	      arr:"",
	      arr2:""
	    }
	  }
	}
	
	
</script>

<style>
.info-img1{margin-top:50px;}
.info-fla2{display: none;background:#eee;}
.info-div1{width:100%;height: 30vh;background: #eee;display: flex; justify-content: space-around;align-items: center}
.info-div1 .info-p1{display: flex;flex-direction: column;justify-content: center;align-items: center}
.info-div1 .info-p1 img{margin-left:30px;}
.info-div1 .info-p1 span{margin-left:30px;}
.Info-div2{width:100%;height:5vh;text-align: center;}
.Info-div2 span{width:45%;height:100%;background: #eee;color:#000;display: inline-block;margin: 10px auto}
.info-p2 {font-size: 0.4rem;margin:20px 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.info-p2 span{float:right;}
.info-div3{width:100%;height:20vh;display: flex;justify-content: space-between;align-items: center;}
.info-div3 p{display: flex;flex-direction: column;justify-content:center;align-items: center}
.vux-flex-row{margin:10px 0;}
.haha{text-align: center;margin:0;padding:0;font-size: 0.9rem;font-weight: 900}
.haha1{margin-top:30px;}
.haha .haha-a1{color:#80cece;}
</style>