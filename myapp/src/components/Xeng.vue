<template>
	<div >
		<div class="xeng">
			<input type="text" placeholder="漫画 | 作者 | 资讯 | 漫展">
			<router-link to="/">  
				<button>取消</button>
				</router-link>
				<p></p>
		</div>
	</div>
</template>

<script>
	import Vue from "vue"
	import { Grid, GridItem } from 'vux'
	export default {
		components :{
	 		Grid,
		    GridItem
		}
	}
</script>
	
<style  scoped>
html{width:100%;height:100%;}
.xeng{width:100vw;height:100vh;background: #fff;position: absolute;left:0;top:0;}
.xeng input{width:80%;height:5%;padding:0 5px;background: #f0f0f0;margin:10px 10px;font-size: 0.2rem;}
.xeng button{border:0;background: #fff}
.xeng p{width:100%;height:1px;background: #eee}
</style>