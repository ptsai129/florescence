<template>
    <div class="container py-5">
      <h2 class="text-light ps-md-5 fw-bold mb-4">我們的堅持</h2>
      <div class="row align-items-center">
        <div class="col-12 offset-md-1 col-md-6">
          <div
            id="carouselExampleCaptions"
            ref="carousel"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1587316830182-59ca6817ce72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  class="d-block w-100"
                  alt="新鮮採集的花"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>親手採下每一束花</h5>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1630158501847-ba2abdb8b87c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  class="d-block w-100"
                  alt="精心設計的花藝"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>用心設計出充滿美感的花藝</h5>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1587316817222-712aa911f86a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  class="d-block w-100"
                  alt="專送人員"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>親手交付給您花朵的祝福</h5>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-12 col-md-5">
        <p class="fs-5 text-light mt-5 mt-md-0">Floresence致力於提供高品質的花藝設計服務，除了傳遞花藝融合於生活的信念，每一束花從採集、設計到交付於您手中的每一刻都不馬虎，用心做好每一件小事是我們的堅持，
        對待每個客人如同家人朋友一般，任何花藝設計上的需求，都歡迎您與Floresence討論，您的滿意笑容是我們最大的動力。</p>
        </div>
      </div>
    </div>
</template>

<script>
import Carousel from 'bootstrap/js/dist/carousel'
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.myCarousel = new Carousel(this.$refs.carousel, {
      interval: 2000,
      wrap: true
    })
  }
}
</script>
