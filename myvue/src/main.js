
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Header , Button ,Swipe, SwipeItem ,TabContainer, TabContainerItem ,Cell,Navbar, TabItem} from 'mint-ui';
import 'mint-ui/lib/style.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios' 

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.use(VueAxios, axios)


Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `<div>
				<App />
  			</div>`,
  components: { App, Header ,Button,Swipe,SwipeItem , TabContainer , TabContainerItem ,Cell,Navbar, TabItem}
})
