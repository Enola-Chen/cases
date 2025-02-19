import { createRouter, createWebHistory } from 'vue-router';
import ProductPage from '../productPage.vue'; // 根據你的檔案結構，導入 productPage.vue
import otherPage from '../otherPage.vue'; // 如果有其他頁面，也需要導入

const routes = [
  {
    path: '/',
    name: 'other',
    component: otherPage,
  },
  {
    path: '/products', // 這是產品總覽的路徑
    name: 'Products',
    component: ProductPage, // 指向你的產品總覽頁面
  },
];

const router = createRouter({
  history: createWebHistory(), // 使用 createWebHistory 來處理歷史記錄
  routes, // 使用上面定義的路由表
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的滾動位置，則返回到保存的位置
    if (savedPosition) {
      return savedPosition;
    } 
    // 如果有 hash (例如：/products#factoryOverview)，則滾動到錨點
    else if (to.hash) {
      return {
        el: to.hash,  // 滾動到錨點元素
        behavior: 'smooth',  // 平滑滾動
      };
    } 
    // 否則滾動到頂部
    else {
      return { top: 0 };
    }
  },
});

export default router;
