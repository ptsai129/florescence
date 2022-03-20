<template>
<nav class="navbar  fixed-top navbar-expand-md navbar-light bg-primary box-shadow position-relative">
  <div class="container-fluid sticky-top">
    <router-link to="/" class="navbar-brand me-5">
         <img src="../assets/images/logo.png" class="nav-logo" alt="logo">
        </router-link>
        <div>
        <i class="bi bi-balloon-heart fs-4  text-secondary me-1 d-lg-none d-md-none"></i>
        </div>
        <div>
        <i class="bi bi-basket fs-4 text-secondary me-1 d-lg-none  d-md-none"></i>
        </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item me-2">
         <router-link  class="nav-link" aria-current="page" to="/about">關於Florescence</router-link>
        </li>
        <li class="nav-item me-2">
        <router-link  class="nav-link " aria-current="page" to="/shopflowers">選購花禮</router-link>
        </li>
        <li class="nav-item">
         <router-link  class="nav-link" aria-current="page" to="/faq">訂花需知</router-link>
        </li>
      </ul>
       <a href="#"><i class="bi bi-balloon-heart fs-3 text-secondary me-4 d-none d-md-block"></i></a>
       <a href="#"><i class="bi bi-basket fs-3 text-secondary me-4 d-none d-md-block"></i></a>
      <div>
      </div>
    </div>
  </div>
</nav>
</template>

<style lang="scss">
@import "src/assets/all.scss";
.box-shadow{
 box-shadow: 0px 0px 15px rgba(232, 219, 211, .9);
}
.nav-logo{
height:50px;
width:130px;
 @media (min-width: 576px) {
    height:70px;
    width:190px;
  }

}
.nav-item:hover{
background-color: $success;
color: $light;
font-weight:bold;
}
</style>
