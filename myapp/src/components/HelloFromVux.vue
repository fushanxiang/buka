<template>
  <div id="box">
    <swiper loop auto :list="demo06_list">
    </swiper>
    <div class="box-div1">每周推荐</div>
    <grid :rows="3">
      <grid-item v-for="item in arr">
        <span class="grid-center"> <router-link :to="{ name:'Infolist', params:{id:item.id} }"><img :src="item.cover_url" width="100%" height="100%" alt=""><p>{{item.title}}</p></router-link></span>
      </grid-item>
    </grid>
    <div class="box-div1">最新更新</div>
    <grid :rows="3">
      <grid-item v-for="item in arr1">
      <span class="grid-center"><router-link :to="{ name:'Infolist', params:{id:item.id} }"><img :src="item.cover_url" width="100%" height="100%" alt=""><p>{{item.title}}</p></router-link></span>
      </grid-item>
    </grid>
    <div class="box-div1">热门连载</div>
    <grid :rows="3">
      <grid-item v-for="item in arr2">
      <span class="grid-center"><router-link :to="{ name:'Infolist', params:{id:item.id} }"><img :src="item.cover_url" width="100%" height="100%" alt=""><p>{{item.title}}</p></router-link></span>
      </grid-item>
    </grid>

  </div>
</template>

<script>
import Vue from "vue"
import { Flexbox , FlexboxItem, Swiper, SwiperItem , Grid, GridItem } from 'vux'
export default {
  components: {
    SwiperItem,
    Flexbox,
    FlexboxItem,
    Swiper,
    Grid,
    GridItem
  },
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    demo06_onIndexChange (index) {
      this.demo06_index = index
    },
     onItemClick () {
      console.log('on item click')
    }
  },
  data () {
    return {
      arr:"",
      arr1:"",
      arr2:"",
      demo06_list: urlList,
      demo06_index: 0,
      swiperItemIndex: 1
    }
  },
  created(){
      var url = "/Recommend/get/?num=6&adpos=910&t=1497412184976&"
      Vue.axios.get(url).then((res)=> {
        return res.data.list
      }).then((data)=> {
        this.arr = data
       // console.log(this.arr)
      })
      var url2 = "/Recommend/get/?num=6&adpos=1242&pool_id=204&t=1497412207059&"
      Vue.axios.get(url2).then((res)=> {
        return res.data.list
      }).then((data)=> {
        this.arr1 = data
       // console.log(this.arr1)
      })
      var url3 = "/Recommend/get/?num=3&adpos=49985&t=1497412207059&"
      Vue.axios.get(url3).then((res)=> {
        return res.data.list
      }).then((data)=> {
        this.arr2 = data
        //console.log(this.arr2)
      })
    }/*,
    computed:{
        spliceStr:function(){
            console.log(this.arr) // Î±Êý×é 
            this.arr = Array.prototype.slice.call(this.arr); // Î±Êý×é×ª³ÉÕæÕýµÄÊý×é 
            return this.arr.map(item=>{ 
                item.title = item.title.substring(0,4) + "..."
                return item
             })
        }
    }*/
}


const baseList = [{
  url: 'javascript:',
  img: 'http://i-r6.sosobook.cn/auto/appRecom/20161218194517_585676cd6e0ca.jpg',
  title: ''
}, {
  url: 'javascript:',
  img: 'http://i-r6.sosobook.cn/auto/appRecom/20161125133328_5837cd28a51e5.jpg',
  title: ''
}, {
  url: 'javascript:',
  img: 'http://i-r6.sosobook.cn/auto/appRecom/20161114165137_58297b19bd8c8.jpg',
  title: ''
}]

const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]

const urlList = baseList.map((item, index) => ({
  url: 'http://m.buka.cn/m/219641',
  img: item.img,
  title: `${item.title}`
}))

const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))

const only2ClickList = baseList.slice(0, 2).map(item => {
  item.url = 'http://m.buka.cn/m/219641'
  return item
})
</script>

<style>
.weui-grid p{color:#000;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.box-div1{margin:5px 10px;}
.weui-grid{display: block;border:0px;width:25%;font-size: 0.2rem}
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}

</style>
