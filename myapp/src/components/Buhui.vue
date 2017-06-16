<template>
	<div id="buhiu-div">
		    <grid :rows="3">
		      <grid-item v-for="item in arr">
            <span class="grid-center"><router-link :to="{ name:'Infolist', params:{id:item.id} }"><img :src="item.logo" width="100%" height="100%" alt=""><p>{{item.name}}</p></router-link></span>
		      </grid-item>
		    </grid>
	</div>
</template>

<script>
	import Vue from "vue"
	import {Grid, GridItem, GroupTitle } from 'vux'
	export default {
		components :{
			Grid,
	    	GridItem,
	    	GroupTitle
		},
		data () {
		    return {
		      arr:"",
		    
		    }
		  },
		created(){
     
	      	  var url = "/category/ajax_group"
  		      Vue.axios.get(url).then((res)=> {
  		        return res.data.datas.items  
  		      }).then((data)=> {
  		        this.arr = data
  		       //console.log(this.arr)
  	      })
   		 }
	}
</script>

<style>
	
</style>