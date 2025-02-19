<script setup>
import { ref } from "vue";
import "/src/style.css";

// 引入組件
import headPage from "./headPage.vue";
// import otherPage from "./otherPage.vue";
import footPage from "./footPage.vue";
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<!-- App.vue -->
<template>
  <headPage />
  <!-- <otherPage /> -->
  <router-view />
  <footPage />
</template>
