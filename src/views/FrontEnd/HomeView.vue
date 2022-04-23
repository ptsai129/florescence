<template>
  <div
    class="banner container-fluid d-flex justify-content-center align-items-center"
  >
    <div class="banner-txt typewriter">
      <h1 class="fs-2 fw-bold text-light">讓花的香氣和美好，走進你的生活裡</h1>
      <div class="banner-button text-center mt-3">
        <router-link to="/shopflowers" class="text-danger text-decoration-none"
          ><i class="bi bi-heart-fill fs-1"></i
        ><p class="text-primary fw-bold">
        立即購買</p></router-link>
      </div>
    </div>
  </div>
  <div class="popular-product py-5 container-fluid bg-primary">
    <div class="container">
      <h2 class="fs-3 py-3 pt-md-4 pb-md-3 mb-0 text-secondary fw-bold">
        熱門花禮
      </h2>
      <div class="row justify-content-center">
        <div class="col-md-4 pt-3 pb-5">
          <div class="popular-item position-relative">
            <a href="#" @click.prevent="goProductsPage('鮮花')">
              <img
                class="img-fluid object-cover"
                src="../../assets/images/flowers-1.jpg" alt="鮮花類別圖片"
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
            <a href="#" @click.prevent="goProductsPage('花束')">
              <img
                class="img-fluid object-cover"
                src="../../assets/images/bouquet-1.jpg" alt="花束類別圖片"
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
            <a href="#" @click.prevent="goProductsPage('盆花')">
              <img
                class="img-fluid object-cover"
                src="../../assets/images/pottedFlowers-1.jpg" alt="盆花類別圖片"
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
    <div class="latestNews py-5 container-fluid bg-secondary">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 order-lg-2">
        <div class="latestNews-title position-absolute bg-warning p-2">
        <h2 class="fs-3 mb-0 text-light fw-bold">
        最新活動
         </h2>
        </div>
        <div class="latestNews-img rounded-circle position-relative">
          </div>
        </div>
        <div class="col-12 col-md-8 order-lg-1">
        <h3 class="fs-4 py-5 text-light fw-bold text-start" data-aos="fade-down">「這一生的浪漫與寵溺，永遠要記得留一份給媽媽。」</h3>
        <div class="latestNews-txt d-flex flex-column" data-aos="fade-down">
        <p class="fs-5 text-primary mb-3">母親節只是五月的其中一天，媽媽的付出卻是全年無休的。媽媽的世界不大，因為幾乎裝滿了關於你的任何一件小事；你的世界很大，常常忽略了她對你的關心，又是一年一度的母親節，送上Florescence精心準備的花禮吧!告訴媽媽你有多麼愛她。</p>
        <router-link   to="/shopflowers" class="btn btn-outline-light w-50 align-self-end">前往選購</router-link>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ourservice py-5 container-fluid bg-success">
   <CarouselView></CarouselView>
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
              alt="Florescence介紹圖片"
            />
          </router-link>
        </div>
        <div class="col-12 col-md-6 col-lg-8 bg-light">
          <div class="intro-text" data-aos="fade-down">
            <p class="fs-5">
              Florescence，是英語中花期全盛期的意思。以此命名，是因為我們希望將花盛開最美的時期，送給所有人。
              我們深信花是生活的必需品，不是奢侈品。透過花，能將您內心最真摯的祝福傳遞給你心中最特別的存在。
            </p>
            <router-link type="button"
              class="btn btn-secondary mt-2"
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
      <div class="row flex-column py-5">
        <div class="col-12">
        <p class="fs-4 mb-2 fw-bold text-secondary">訂閱我們獲得最新消息</p>
        </div>
        <div class="col-11 col-lg-5 col-md-8">
        <v-form
          class="input-group mt-md-0 mt-3"
          ref="form"
          v-slot="{ errors }"
          @submit="onSubmit"
        >
          <v-field
            id="email"
            name="email"
            type="email"
            class="form-control rounded-0"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></v-field
          ><button class="btn btn-secondary" type="submit" id="search">
            訂閱
          </button>
          <error-message name="email" class="invalid-feedback"></error-message>
        </v-form>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import CarouselView from '@/components/CarouselView.vue'
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
  components: {
    CarouselView
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
  mounted () {}
}
</script>

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
.banner-button {
  animation: moveUpAndDown 1s infinite;
}

@keyframes moveUpAndDown {
  0% {
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
  transition: all .3s ease-out;
}
.pic img:hover {
  transform: scale(1.2, 1.2);
}
/* 最新消息*/
.latestNews-title{
z-index:100;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
.latestNews-img{
background-image: url(https://images.unsplash.com/photo-1554355204-1891654d7de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80);
max-width:300px;
height:300px;
background-size:cover;
background-position: top center;
z-index:10;
padding-top: 10px;
padding-left: 20px;
opacity:.85;
}
.latestNews-txt{
padding-left: 50px;
}
</style>
