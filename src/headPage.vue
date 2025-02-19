<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="relative">
    <!-- Header -->
    <div
      class="bg-white flex fixed top-0 left-0 justify-between h-24 w-full z-10 border-b"
    >
      <div class="flex items-center h-24 px-4 lg:px-0">
        <div class="flex items-center pr-4 lg:pr-10">
          <div class="w-8 lg:w-10">
            <img src="./images/LOGO.png" alt="factoryLogo" />
          </div>
          <div class="ml-2">
            <router-link to="/"></router-link>
            <!-- <a href="#">
              <h1 class="text-slate-700 text-lg lg:text-xl">飛騰塑膠有限公司</h1>
              <p class="text-slate-700 text-xs">PHENTON PLASTIC Co., Ltd</p>
            </a> -->
            <router-link to="/">
              <h1 class="text-slate-700 text-lg lg:text-xl">飛騰塑膠有限公司</h1>
              <p class="text-slate-700 text-xs">PHENTON PLASTIC Co., Ltd</p>
            </router-link>
          </div>
        </div>
        <div class="hidden lg:flex space-x-10">
          <router-link to="/#material" class="text-slate-700">材料介紹</router-link>
          <router-link to="/#history" class="text-slate-700">工廠概覽</router-link>
          <router-link to="/#qa" class="text-slate-700">常見問題</router-link>
        </div>
      </div>
      <div class="flex items-center">
        <div class="w-32 h-full bg-lightRed flex items-center justify-center">
          <router-link to="/products" class="text-white">產品總覽</router-link>
        </div>
        <button @click="toggleMenu" class="lg:hidden px-4 bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="lg:hidden fixed inset-0 bg-white z-20 pt-24">
      <div class="flex flex-col items-center space-y-4 p-4">
        <button @click="toggleMenu">X</button>
        <router-link to="/#material" @click="toggleMenu" class="text-slate-700"
          >材料介紹</router-link
        >
        <router-link to="/#history" @click="toggleMenu" class="text-slate-700"
          >工廠概覽</router-link
        >
        <router-link to="/#qa" @click="toggleMenu" class="text-slate-700"
          >常見問題</router-link
        >
      </div>
    </div>
  </div>
</template>
