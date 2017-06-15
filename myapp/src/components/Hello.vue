<template>
  <div class="hello">
     <grid :rows="3">
      <grid-item v-for="item in arr4">
      <span class="grid-center" ><router-link :to="{ name:'Infolist', params:{id:item.id} }"><img :src="item.logo" width="100%" height="100%" alt=""><p>{{item.name}}</p></router-link></span>
      </grid-item>
    </grid>
  </div>
</template>

<script>
import Vue from "vue"
import { Grid, GridItem } from 'vux'
export default {
  name: 'hello',
  components: {
	    Grid,
	    GridItem
  },
  data () {
    return {
      arr4:""
    }
  },
  created(){
       var url = "/ranking/get_data"
	      Vue.axios.get(url).then((res)=> {
	        return res.data.datas.items  
	      }).then((data)=> {
	        this.arr4 = data
	        console.log(this.arr4)
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-grid span p{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}

</style>
