<template>
  <div class="banner container-fluid position-relative">
    <!--文字要補輸入文字動畫效果 https://codepen.io/uiswarup/pen/JBMGbb-->
    <h1
      class="fs-2 fw-bold text-light position-absolute top-50 start-50 translate-middle"
    >
      讓花的香氣和美好，走進你的生活裡
    </h1>
  </div>
  <div class="intro container-fluid bg-primary">
    <div class="container">
      <h2 class="fs-3 py-2 pt-md-4 pb-md-3 mb-0 text-secondary fw-bold">
        關於我們
      </h2>
      <div class="row g-0 py-1 py-md-3">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="pic">
          <img class="img-fluid h-100 object-cover"
            src="../assets/images/intro-photo.jpg"
            alt=""
          />
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-8 bg-light">
          <div class="intro-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae in
            facere, dignissimos ut, consequuntur maiores sed magni nobis autem
            obcaecati, similique consequatur delectus facilis accusamus aut
            dolor maxime nesciunt suscipit. Cumque asperiores, eum eaque debitis
            repellendus quod commodi non temporibus hic, sequi alias deserunt
            quaerat quae quos optio molestias praesentium, perspiciatis rerum
            at? Quae nostrum quos repellendus dignissimos asperiores. Unde?
          </p>
          <router-link class="btn btn-secondary mt-2" to="/about"
            >了解更多</router-link
          >
           </div>
           </div>
      </div>
    </div>
  </div>
  <div class="popular-product container-fluid bg-secondary">
    <div class="container">
      <h3 class="fs-3 py-1 py-md-3 text-primary text-center">
        <i class="bi bi-gift pe-2"></i>推薦禮物
      </h3>
      <p>生日禮物</p>
      <!--使用swiper-->
    </div>
  </div>
   <div class="bg-primary">
      <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start py-3">
          <p class=" fs-4 mb-0 fw-bold text-secondary">想要獲得最新消息嗎?快來訂閱我們!</p>
          <div class="input-group w-50 mt-md-0 mt-3">
            <input type="text" class="form-control rounded-0" placeholder="請輸入您的電子郵件地址" />
            <div class="input-group-append">
              <button class="btn btn-secondary" type="button" id="search">
                訂閱
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  <router-view></router-view>
</template>

<style lang="scss">
.banner {
  background: url("../assets/images/frontBanner.jpg") no-repeat center;
  height: 300px;
  background-size: cover;
  object-fit: cover;
  @media (min-width: 576px) {
    height: 450px;
  }
}
.intro-text{
 padding:30px;
}
.object-cover{
object-fit:cover;
}
.pic{ overflow:hidden;}
.pic img{transform:scale(1,1);transition: all 1s ease-out;}
.pic img:hover{transform:scale(1.2,1.2);}
</style>

<script>
export default {}
</script>
