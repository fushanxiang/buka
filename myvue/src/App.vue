<template>
  <div id="app">
    <mt-header>
    <router-link to="/" slot="left">
      <mt-button><img src="./assets/logo_2x.png" height="26" width="60" alt=""></mt-button>
    </router-link>
    <mt-button slot="right"><img src="./assets/research_2x.png" height="26" width="26" alt=""></mt-button>
  </mt-header>
  <router-view></router-view>
 
</div>
</template>

<script>
export default {
  name: 'app',
  
}

</script>

<style>
*{
    padding: 0;
    margin: 0;
  }
  ul li {
    list-style: none;
  }
  .mint-swipe{
    height: 30vh;
  }
.mint-header{background:white;margin:5px 5px;}

</style>
