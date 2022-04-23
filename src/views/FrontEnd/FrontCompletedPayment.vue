<template>
 <div class="completedpayment-bg">
  <div class="container completedInfo-style">
    <div class="row justify-content-center">
      <div class="col-8 col-md-6">
        <div class="bg-white rounded text-center  border border-primary border-3 py-3">
          <i class="bi bi-check2-circle text-danger"></i>
          <h1 class="text-secondary fs-3 fw-bold mb-3">付款完成</h1>
          <div class="d-flex justify-content-center">
            <router-link
              class="btn btn-secondary me-3 rounded text-primary"
              to="/shopflowers"
              >選購花禮</router-link
            >
            <router-link
              class="btn btn-light btn-shine rounded text-secondary"
              to="/"
              >回到首頁</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
.progressbar{
  li{
   width:31%;
  }
}
@keyframes glowing {
  0% {
    background-color: rgb(235, 200, 216);
    box-shadow: 0 0 5px rgb(235, 200, 216);
  }
  50% {
    background-color: rgba(247, 239, 12, 0.47);
    box-shadow: 0 0 20px rgba(247, 239, 12, 0.47);
  }
  100% {
    background-color:rgb(235, 200, 216);
    box-shadow: 0 0 5px rgb(235, 200, 216);
  }
}
.btn-shine{
  animation: glowing 1300ms infinite;
}
.bi-check2-circle{
font-size: 100px;
}
.completedInfo-style{
padding-top: 100px;
}

.completedpayment-bg {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1595681242679-1b77b1e6a3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80");
  background-position: center;
  background-attachment: fixed;
  height:100vh;
}
</style>
