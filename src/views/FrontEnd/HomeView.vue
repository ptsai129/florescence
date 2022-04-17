<template>
  <div
    class="banner container-fluid d-flex justify-content-center align-items-center">
    <div class="banner-txt typewriter">
      <h1 class="fs-2 fw-bold text-light">讓花的香氣和美好，走進你的生活裡</h1>
      <div class="banner-button text-center mt-3">
      <a href="#popular" class="text-danger"><i class="bi bi-heart-fill fs-1"></i></a>
      </div>
    </div>
  </div>
  <div class="popular-product py-5 container-fluid bg-light" id="popular">
    <div class="container">
      <h2 class="fs-3 py-3 pt-md-4 pb-md-3 mb-0 text-secondary fw-bold">
        熱門花禮
      </h2>
      <div class="row justify-content-center">
        <div class="col-md-4 pt-3 pb-5">
          <div class="popular-item position-relative">
            <a href="#"  @click.prevent="goProductsPage('鮮花')">
              <img
                class="img-fluid object-cover"
                src="../../assets/images/flowers-1.jpg"
            /></a>
            <div
              class="popular-txt position-absolute top-50 start-50 translate-middle"
            >
              <h3 class="text-light">日常鮮花</h3>
            </div>
          </div>
        </div>
        <div class="col-md-4 pt-3 pb-5">
          <div class="popular-item position-relative">
            <a href="#"  @click.prevent="goProductsPage('花束')">
              <img
                class="img-fluid object-cover"
                src="../../assets/images/bouquet-1.jpg"
            /></a>
            <div
              class="popular-txt position-absolute top-50 start-50 translate-middle"
            >
              <h3 class="text-light">浪漫花束</h3>
            </div>
          </div>
        </div>
        <div class="col-md-4 pt-3 pb-5">
          <div class="popular-item position-relative">
            <a href="#"  @click.prevent="goProductsPage('盆花')">
              <img
                class="img-fluid object-cover"
                src="../../assets/images/pottedFlowers-1.jpg"
            /></a>
            <div
              class="popular-txt position-absolute top-50 start-50 translate-middle"
            >
              <h3 class="text-light">節慶盆花</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="intro py-5 container-fluid bg-secondary">
    <div class="container">
      <h2 class="fs-3 py-3 pt-md-4 pb-md-3 mb-0 text-primary fw-bold">
        關於我們
      </h2>
      <div class="row g-0 py-1 py-md-3">
        <div class="col-12 col-md-6 col-lg-4">
          <router-link to="/about" class="pic">
            <img
              class="img-fluid object-cover"
              src="../../assets/images/intro-photo.jpg"
              alt=""
            />
          </router-link>
        </div>
        <div class="col-12 col-md-6 col-lg-8 bg-light">
          <div class="intro-text" data-aos="fade-down">
            <p class="fs-5">
              Florescence，是英文中花期全盛期的意思，希望將花綻放盛開後，最美的時期，帶給所有人。
              花，有著不同的祝福與寓意，同時也可以將您內心最真摯的感情與祝福傳遞給您心目中最特別的人。
            </p>
            <router-link
              class="btn btn-secondary mt-2"
              aria-current="page"
              to="/about"
              >了解更多</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-primary">
    <div class="container">
      <div
        class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center align-items-start py-5"
      >
        <p class="fs-4 mb-0 fw-bold text-secondary">訂閱我們獲得最新消息</p>
          <v-form class="input-group w-75 mt-md-0 mt-3" ref="form" v-slot="{ errors }" @submit="onSubmit">
            <v-field
              id="email"
              name="email"
              type="email"
              class="form-control rounded-0"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></v-field><button class="btn btn-secondary" type="submit" id="search">訂閱</button>
            <error-message
              name="email"
              class="invalid-feedback"
            ></error-message>
          </v-form>
        </div>
      </div>
  </div>
  <router-view></router-view>
</template>

<style lang="scss">
.banner {
  background: url("../../assets/images/frontBanner.jpg") no-repeat center;
  height: 500px;
  background-size: cover;
  object-fit: cover;
}
.banner-txt {
  max-width: 230px;
  @media (min-width: 576px) {
    max-width: 500px;
  }
  @media (min-width: 768px) {
    max-width: 700px;
  }
}
/*banner動畫*/
.typewriter h1 {
  @media (min-width: 576px) {
    overflow: hidden; /* 確保動畫開始前不顯示文字*/
    border-right: 0.15em solid #fff; /* 文字輸入游標 */
    white-space: nowrap; /* 保持單行顯示*/
    animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
  }
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
}
/* banner往下指引的icon */
.banner-button{
animation: moveUpAndDown 1s infinite;
}

@keyframes moveUpAndDown {
0%{
transform: translate(0px, 0px);
}
50% {
transform: translate(0px, -20px);
}
100% {
transform: translate(0px, 0px);
}
}
/*熱門花禮*/
.popular-item img {
  opacity: 0.6;
}
.popular-item:hover img {
  opacity: 1;
  transition: opacity.5s;
}
.popular-txt h3:after {
  content: "";
  display: block;
  width: 0%;
  height: 2px;
  background-color: #fff;
  transition: width 0.2s 0.3s;
}
.popular-txt:hover h3:after {
  width: 100%;
}
/*關於我們*/
.intro-text {
  padding: 30px;
}
.object-cover {
  object-fit: cover;
}
.pic {
  display: block;
  overflow: hidden;
}
.pic img {
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.pic img:hover {
  transform: scale(1.2, 1.2);
}

</style>

<script>
export default {
  data () {
    return {
      form: {
        user: {
          email: ''
        }
      }
    }
  },
  methods: {
    // 點擊其中一個產品類別圖片 會帶參數到路由上
    goProductsPage (type) {
      this.$router.push(`/shopflowers?cate=${type}`)
    },
    // 送出訂閱資料
    onSubmit () {
      // 清空表單
      this.$refs.form.resetForm()
      this.$swal('已完成訂閱')
    }
  },
  mounted () {
  }
}
</script>
