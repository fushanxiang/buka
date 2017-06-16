<template>
	<div id="fenlei-div">
		<ul class="div-ul1">
			<li><router-link to="/buhui"><img src="http://i-r6.sosobook.cn/logo/group/20160825145944_57be976063e36.png" width="100%" height="100%" alt="">
				<p>最新更新</p></router-link>
			</li>
			<li><router-link to="/rban"><img src="http://i-r6.sosobook.cn/logo/group/20160825145948_57be9764d0c6e.png" width="100%" height="100%" alt="">
				<p>今日热榜</p></router-link>
			</li>
			<li><router-link to="/wan"><img src="http://i-r6.sosobook.cn/logo/group/20170103144735_586b49070de22.png" width="100%" height="100%" alt="">
				<p>已完结</p></router-link>
			</li>
			<li><router-link to="/gao"><img src="http://i-r6.sosobook.cn/logo/group/20161013164354_57ff494a432b3.png" width="100%" height="100%" alt="">
				<p>高分精选</p></router-link>
			</li>
			<li><router-link to="/zhoubian"><img src="http://i-r6.sosobook.cn/logo/group/20161012160943_57fdefc702307.png" width="100%" height="100%" alt="">
				<p>漫展周边</p>	</router-link>
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20170424145626_58fda19accdd9.jpg" width="100%" height="100%" alt="">
				<p>最近上新</p>		
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20160314180045_56e68bcdc7193.jpg" width="100%" height="100%" alt="">
				<p>日韩</p>
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20151013151320_561caf1078614.jpg" width="100%" height="100%" alt="">
				<p>条漫</p>
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20151120172131_564ee61b425c6.jpg" width="100%" height="100%" alt="">
				<p>联合出品</p>
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20150925183512_5605236047829.jpg" width="100%" height="100%" alt="">
				<p>少女</p>
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20160314180433_56e68cb162845.jpg" width="100%" height="100%" alt="">
				<p>百合</p>
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20150909165607_55eff4276f9a7.jpg" width="100%" height="100%" alt="">
				<p>肥皂</p>	
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20150925183521_56052368e6ef1.jpg" width="100%" height="100%" alt="">
				<p>恋爱</p>	
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20151109155620_564051a421997.jpg" width="100%" height="100%" alt="">
				<p>玄幻</p>
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20170225150904_58b12d90b2274.jpg" width="100%" height="100%" alt="">
				<p>污污污3</p>
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20150925183527_5605236f5c819.jpg" width="100%" height="100%" alt="">
				<p>游戏</p>
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20150925183530_56052372a8309.jpg" width="100%" height="100%" alt="">
				<p>治愈</p>
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20170213181733_58a187bdbcb4c.png" width="100%" height="100%" alt="">
				<p>恐怖</p>
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20150925183535_56052376e7e91.jpg" width="100%" height="100%" alt="">
				<p>科幻</p>
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20150925183542_5605237e62da9.jpg" width="100%" height="100%" alt="">
				<p>搞笑</p>
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20150925183546_5605238298cf1.jpg" width="100%" height="100%" alt="">
				<p>鬼怪</p>
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20150925183549_56052385c6f39.jpg" width="100%" height="100%" alt="">
				<p>励志</p>
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20150925183557_5605238dab5d1.jpg" width="100%" height="100%" alt="">
				<p>格斗</p>
			</li>
			<li><img src="http://i-r6.sosobook.cn/logo/group/20150810121934_55c8265664a82.jpg" width="100%" height="100%" alt="">
				<p>布卡娘S</p>
			</li>
		</ul>
    </grid>
	</div>
</template>

<script>
	import Vue from "vue"
	import { Grid, GridItem } from 'vux'
	export default {
		components :{
				 Grid,
	    		GridItem
		},
		data () {
		    return {
		      arr:""
		    }
		  }
	}
</script>
<style>
.div-ul1{display: flex;justify-content: space-between;flex-wrap:wrap;}
.div-ul1 li{width:20%;height:80px;margin: 30px 10px;border-radius:50%;text-align: center;list-style: none}
.div-ul1 li img{border-radius: 50%;display: inline-block; }
</style>