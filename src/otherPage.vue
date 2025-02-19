<template>
  <!-- Hero Section -->
  <div
    class="bg-[url('./images/cover1.jpg')] bg-cover bg-center bg-top w-full h-screen mt-24 relative"
  >
    <div class="absolute inset-0 flex items-center justify-start px-4 lg:px-[100px]">
      <div class="text-white" style="text-shadow: 6px 8px 8px rgb(131, 128, 128)">
        <p class="text-sm font-bold">MADE IN TAIWAN</p>
        <p class="text-4xl lg:text-7xl font-bold mt-4 lg:mt-7">ASSEMBLE</p>
        <p class="text-5xl lg:text-9xl font-bold my-4 lg:my-7">THE QUALITY</p>
        <p class="text-lg lg:text-xl text-shadow-lg">專注品質，塑造卓越</p>
      </div>
    </div>
  </div>

  <!-- Material Using Section -->
  <div class="bg-primary w-full lg:py-24 px-4 lg:px-24" id="material">
    <div class="py-64">
      <h2
        class="text-6xl w-12 text-9xl text-stroke flex flex-wrap mb-8 lg:text-9xl text-stroke mb-8"
      >
        Material Using
      </h2>
      <div class="text-white text-lg lg:text-3xl leading-relaxed space-y-6 lg:space-y-10">
        <p class="leading-loose">
          聚丙烯（PP）作為一種高性能的工程材料，其卓越的特性使其在眾多材料中脫穎而出，PP的化學惰性使其對酸、鹼、溶劑等具有極強的抵抗力，這意味著它能在惡劣的化學環境中保持穩定，延長產品的使用壽命
        </p>
        <p class="leading-loose">
          此外，PP的高熔點賦予了它出色的耐熱性，使其在高溫環境下不易變形，適用於各種高溫應用。同時，PP兼具輕質與高強度的特點，這不僅減輕了產品的重量，更提供了可靠的結構支撐，提高了產品的耐用性
        </p>
        <p class="leading-loose">
          最重要的是，PP的可回收性使其符合當今對環保產品回收再利用的需求，減少了對環境的負擔
        </p>
      </div>
    </div>
  </div>

  <!-- History Section -->
  <div class="w-full py-16 lg:py-32 px-4 lg:px-[100px]" id="history">
    <div
      class="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-[50px]"
    >
      <div class="w-full lg:w-1/2">
        <img src="./images/car.png" alt="" class="w-full h-auto" />
      </div>
      <div class="w-full lg:w-1/2 space-y-5">
        <h2 class="text-6xl lg:text-9xl text-[#0E5828]">Our history</h2>
        <div class="space-y-5 text-[#0E5828]">
          <p>
            飛騰塑膠有限公司自1988年成立以來，始終專注於園藝工具的生產與研發。當時市面上的耙子雖然有鐵製、竹製和塑膠製成，但我們選擇了實用性更高的塑膠材質，以PP耐衝擊作為主要材料。為了提升產品的多樣性，也積極開發和設計多種規格的塑膠產品
          </p>
          <p>
            飛騰塑膠現已由第二代管理層接手經營，積極參與國外園藝工具展覽，並接受各公司企業提供新產品樣式開發合作，掌握行業的最新趨勢，確保我們的產品在技術上始終保持領先
          </p>
          <p>
            展望未來，我們將繼續堅持技術創新，為每位客戶提供最優質的產品與服務，並期待與更多合作夥伴攜手共創輝煌
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- F & Q Section -->
  <div class="w-full pb-16 lg:py-36 px-4 lg:px-0" id="qa">
    <div class="flex flex-col lg:flex-row">
      <!-- Left side -->
      <div class="w-full lg:w-2/5 mb-8 lg:mb-0 lg:sticky lg:top-24 lg:h-[650px]">
        <h2 class="text-primary text-6xl lg:text-9xl mb-8">F & Q</h2>
        <div class="flex justify-center lg:translate-x-24 lg:translate-y-16">
          <img src="./images/qarake.png" alt=" " class="w-3/6 h-[450px]" />
        </div>
      </div>

      <!-- Right side - Q&A cards -->
      <div class="w-full mr-4 lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-7">
        <div class="border rounded-sm p-8">
          <p class="text-2xl font-medium text-black">/Q1</p>
          <h3 class="font-bold text-lg text-primary my-7">
            一般從下訂單到交貨大約需要多久的時間？
          </h3>
          <p class="leading-relaxed">
            通常情況下，我們的生產週期大約為
            60天，具體時間還需根據訂單量和當時的生產排期來進行調整
          </p>
        </div>
        <div class="border rounded-sm p-8">
          <p class="text-2xl font-medium text-black">/Q2</p>
          <h3 class="font-bold text-lg text-primary my-7">
            你們的最小訂單量是多少？如果需要靈活訂單，你們能提供嗎？
          </h3>
          <p class="leading-relaxed">
            我們的最小訂單量（MOQ）為
            1000件。如果有特別的訂單需求，我們可以視情況進行適當調整，以滿足客戶的需求
          </p>
        </div>
        <div class="border rounded-sm p-8">
          <p class="text-2xl font-medium text-black">/Q3</p>
          <h3 class="font-bold text-lg text-primary my-7">
            請問你們的付款方式是什麼？能提供靈活的付款條件嗎？
          </h3>
          <p class="leading-relaxed">
            我們的付款方式是結關後14天內付款，接受的付款方式包括銀行轉帳和支票等。如果有特殊的付款需求，我們可以進一步討論具體方案
          </p>
        </div>
        <div class="border rounded-sm p-8">
          <p class="text-2xl font-medium text-black">/Q4</p>
          <h3 class="font-bold text-lg text-primary my-7">
            在運輸方面，你們是否提供運輸服務，還是需要我們自行安排？
          </h3>
          <p class="leading-relaxed">
            我們採用的是 FOR（Free on
            Rail）條款，這意味著我們會負責產品的運輸到指定的運輸站，之後的運輸將由客戶負責
          </p>
        </div>
        <div class="border rounded-sm p-8">
          <p class="text-2xl font-medium text-black">/Q5</p>
          <h3 class="font-bold text-lg text-primary my-7">
            你們是否接受定制訂單？如果我們有特殊的設計需求或包裝要求，你們能否滿足？
          </h3>
          <p class="leading-relaxed">
            是的，我們接受定制訂單，並且能滿足客戶的特殊設計需求和包裝要求
          </p>
        </div>
        <div class="border rounded-sm p-8">
          <p class="text-2xl font-medium text-black">/Q6</p>
          <h3 class="font-bold text-lg text-primary my-7">
            如果我們有加急訂單，是否會收取加急費用？加急訂單的交貨時間大概是多長？
          </h3>
          <p class="leading-relaxed">
            我們不會收取加急費用，但具體的交貨時間需根據當期的訂單量來決定
          </p>
        </div>
        <div class="border rounded-sm p-8">
          <p class="text-2xl font-medium text-black">/Q7</p>
          <h3 class="font-bold text-lg text-primary my-7">
            請問產品本身是否包含手柄？如果不包含，是否可以選擇加購手柄？
          </h3>
          <p class="leading-relaxed">
            我們的產品可自由選擇是否包含手柄，手柄為木製。若選擇包含手柄，會隨附螺絲供安裝。如果您只購買耙子，則不會附帶手柄和螺絲
          </p>
        </div>
        <div class="border rounded-sm p-8">
          <p class="text-2xl font-medium text-black">/Q8</p>
          <h3 class="font-bold text-lg text-primary my-7">
            你們的生產過程是否符合環保要求？是否有相關的環保認證或措施？
          </h3>
          <p class="leading-relaxed">
            是的，我們的生產過程完全符合環保標準。我們的產品已通過 SGS 和 RoHS
            認證，這兩項認證保證了我們的產品在環保和安全方面符合國際標準
          </p>
        </div>
        <!-- Repeat this structure for the remaining 7 Q&A cards -->
      </div>
    </div>
  </div>
</template>
