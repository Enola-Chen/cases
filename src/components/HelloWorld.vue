<script setup>
import { ref } from "vue";
// import bestOne from '../images/bestOne.png';

// const productDetail = defineProps({
//   name: String,
//   price: Number,
//   size: String,
//   img: String
// })

const products = ref(
  {
    name: "#1012",
    size: "",
    img: "../src/images/bestOne.png",
  },
  {
    name: "#1022",
    size: "",
    img: "../src/images/bestOne.png",
  },
  {
    name: "#1018",
    size: "",
    img: "../src/images/bestOne.png",
  }
);
</script>

<template>
  <div>
    <div>
      <div class="">
        <h2 class="">8~17英吋</h2>
      </div>

      <ul>
        <li v-for="(product, index) in products" :key="index">
          <div>
            <img :src="product.img" alt="productImage" />
          </div>
          <p class="text-center">{{ product.name }}</p>
        </li>
      </ul>

      <!-- <div class="flex justify-center space-x-16">
                <div class="w-1/5">
                    <div>
                        <img src="../images/bestOne.png" alt="" >
                    </div>
                    <p class="text-center">{{ product.name1 }}</p>
                </div>
                
                <div class="w-1/5">
                    <div>
                        <img src="../images/bestOne.png" alt="" >
                    </div>
                    <p class="text-center">{{ product.name2 }}</p>
                </div>

                <div class="w-1/5">
                    <div>
                        <img src="../images/bestOne.png" alt="" >
                    </div>
                    <p class="text-center">{{ product.name }}</p>
                </div>





                <div class="flex w-1/4">
                    <div>
                        <img src="./images/bestOne.png" alt="" >
                    </div>
                    <div>
                        <p class="text-pink-300 border border-blue-600">尺寸：</p>
                        <p>型號：</p>
                        <p>售價：</p>
                        <p></p>
                    </div>
                </div>
            </div> -->
    </div>
  </div>
</template>
