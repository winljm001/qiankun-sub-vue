import "./public-path";
import Vue from "vue";
import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n

import "@/styles/index.scss"; // global css

import App from "./App";
import store from "./store";
import router from "./router";

import "@/icons"; // icon
// import "@/permission"; // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale });
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false;
let instance = null;
const render = (props = {}) => {
  const { container } = props;
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector("#vueApp") : "#vueApp"); // 这里是挂载到子应用的html中基座会拿到这个挂载后的html将其插入进去
};

if (!window.__POWERED_BY_QIANKUN__) {
  // 子应用支持独立开发运行
  render();
}

// 子应用相关协议，需要导出这三个方法
/* eslint-disable */
export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
/* eslint-disable */
export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props); // 装载
}
/* eslint-disable */
export async function unmount() {
  instance.$destroy(); // 卸载
  instance = null;
}
