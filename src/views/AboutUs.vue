<template>
  <div class="container-fluid">
    <h1 class="text-center fw-bold text-secondary my-3 mt-md-5">
      關於Florescence
    </h1>
    <div class="container py-5">
      <div class="row align-items-lg-center">
        <div class="col-12 col-lg-7 order-2 order-lg-1" data-aos="fade-right">
          <h2 class="fw-bold text-secondary mt-5">品牌理念</h2>
          <p class="fs-5 text-secondary mt-3">
            <strong>Florescence花店</strong
            >成立於2021年春天，創立於桃園，設計團隊主要以『花藝』及『溫度』兩大面向為創作思考，將花草最自然的姿態融入設計作品中，為每一位顧客傳遞想表達的情感與溫度。
          </p>
          <p class="fs-5 text-secondary mt-3">
            我們相信花草是最能帶來幸福感的，不論是快樂還是悲傷，都會全然地接納，用最溫柔的方式陪伴著擁有我們作品的每一位朋友，並且讓人在任何時候都能因擁有生活中的一隅美感事物，覺察到平凡日常的美及生命力。
            因此，期望將花藝融入每個人的日常生活中，造就「生活就是花藝，花藝就是生活」的理念，把花的美好帶給大家。
          </p>
        </div>
        <div class="col-12 col-lg-5 order-1 order-lg-2" data-aos="fade-left">
          <div
            class="rounded"
            style="
              background-image: url(https://images.unsplash.com/photo-1628927124199-a8a2a5394392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80);
              height: 400px;
              background-size: cover;
              background-position: center center;
            "
          ></div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row align-items-lg-center">
        <div class="col-12 col-lg-5" data-aos="fade-left">
          <div
            class="rounded"
            style="
              background-image: url(https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
              height: 400px;
              background-size: cover;
              background-position: center center;
            "
          ></div>
        </div>
        <div class="col-12 col-lg-7"  data-aos="fade-right">
          <h2 class="fw-bold text-secondary mt-5">服務項目</h2>
          <p class="fs-4 text-secondary mt-3">
            我們致力於提供高品質的花藝設計服務
          </p>
          <ul class="fs-5 text-secondary mt-3">
            <li>花束、盆花、盆景、花籃、新娘捧花、胸花等各式花禮</li>
            <li>植栽、居家花藝、花藝裝置，均提供包月服務</li>
            <li>客製化訂製服務</li>
          </ul>
          <p class="text-secondary">
            詳細服務內容，歡迎聯絡洽詢。<br />歡迎各公司行號、廠商洽詢異業合作。
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-secondary">
   <h3 class="text-primary text-center fw-bold py-4">聯絡我們</h3>
   <div class="container pb-5">
   <div class="row justify-content-center">
   <div class="col-11 col-lg-8 bg-light">
   <div class="mb-3 px-3 pt-3">
  <label for="name" class="form-label">姓名</label>
  <input type="text" class="form-control" id="name" placeholder="name@example.com">
</div>
   <div class="mb-3 px-3">
  <label for="phonenumber" class="form-label">電話</label>
  <input type="tel" class="form-control" id="phonenumber" placeholder="09xx-xxx-xxx">
</div>
  <div class="mb-3 px-3">
  <label for="emailaddress" class="form-label">電子信箱</label>
  <input type="email" class="form-control" id="emailaddress" placeholder="name@example.com">
</div>
<div class="mb-3 px-3 pb-3">
  <label for="exampleFormControlTextarea1" class="form-label">留言給我們</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button type="submit" class="btn btn-secondary mt-3 ">送出表單</button>
</div>

   </div>
   </div>
   </div>
   </div>
  <router-view></router-view>
</template>
