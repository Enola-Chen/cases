<script setup>
import { ref } from "vue";

const size1 = ref([
  {
    name: "#1012",
    teeth: "14",
    img: "../src/images/rake1.jpg",
    size: "8",
  },
  {
    name: "#1018",
    teeth: "26",
    img: "../src/images/rake2.jpg",
    size: "17",
  },
  {
    name: "#1022",
    teeth: "18",
    img: "../src/images/bestOne.png",
    size: "12",
  },

]);
const size2 = ref([
  {
    name: "#1015-A",
    teeth: "20",
    img: "../src/images/bestOne.png",
  },
  {
    name: "#1015-B",
    teeth: "20",
    img: "../src/images/bestOne.png",
  },
  {
    name: "#2018",
    teeth: "20",
    img: "../src/images/bestOne.png",
  },
  {
    name: "#2038",
    teeth: "18",
    img: "../src/images/bestOne.png",
  },
    {
    name: "#1014",
    teeth: "23",
    img: "../src/images/bestOne.png",
  },
]);

const size3 = ref([
  {
    name: "#1013",
    teeth: "21",
    img: "../src/images/bestOne.png",
  },
  {
    name: "#1026",
    teeth: "22",
    img: "../src/images/bestOne.png",
  },
  {
    name: "#2039",
    teeth: "24",
    img: "../src/images/bestOne.png",
  },
  {
    name: "#1016-B",
    teeth: "27",
    img: "../src/images/bestOne.png",
  },
  {
    name: "#1017",
    teeth: "27",
    img: "../src/images/bestOne.png",
  },
  {
    name: "#2016",
    teeth: "24",
    img: "../src/images/bestOne.png",
  }
]);


const size4 = ref([
  {
    name: "#1030",
    teeth: "30",
    img: "../src/images/bestOne.png",
  },
  {
    name: "#2030",
    teeth: "30",
    img: "../src/images/bestOne.png",
  },
  {
    name: "#2330",
    teeth: "30",
    img: "../src/images/bestOne.png",
  },
]);

const componentName = "ProductPage";
</script>

<template>
  <div class="w-full pt-24">
    <div class="flex justify-center py-36">
      <div class="w-9/12">
        <!-- 第一组产品 -->
        <div>
          <h2 class="text-lg font-bold mb-4 text-center">8~17英吋</h2>
          <ul class="flex flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <li v-for="(product, index) in size1" :key="index" class="text-center">
              <div>
                <img :src="product.img" alt="productImage" />
              </div>
              <p class="text-center">{{ product.name }}</p>
              <p class="text-center">尺寸:{{ product.size }}英吋</p>
              <p class="text-center">鋸齒數量:{{ product.teeth }}</p>
            </li>
          </ul>
        </div>

        <div class="mt-8">
          <h2 class="text-lg font-bold mb-4 text-center">18~22英吋</h2>
          <ul class="flex flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <li v-for="(product, index) in size2" :key="index" class="text-center">
              <div>
                <img :src="product.img" alt="productImage" />
              </div>
              <p class="text-center">鋸齒數量:{{ product.teeth }}</p>
              <p class="text-center">{{ product.name }}</p>
            </li>
          </ul>
        </div>

        <div class="mt-8">
          <h2 class="text-lg font-bold mb-4 text-center">24英吋</h2>
          <ul class="flex flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <li v-for="(product, index) in size3" :key="index" class="text-center">
              <div>
                <img :src="product.img" alt="productImage" />
              </div>
              <p class="text-center">鋸齒數量:{{ product.teeth }}</p>
              <p class="text-center">{{ product.name }}</p>
            </li>
          </ul>
        </div>
        <div class="mt-8">
          <h2 class="text-lg font-bold mb-4 text-center">30英吋</h2>
          <ul class="flex flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <li v-for="(product, index) in size4" :key="index" class="text-center">
              <div>
                <img :src="product.img" alt="productImage" />
              </div>
              <p class="text-center">鋸齒數量:{{ product.teeth }}</p>
              <p class="text-center">{{ product.name }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
