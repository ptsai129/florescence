<template>
<nav class="navbar  fixed-top navbar-expand-md navbar-light bg-primary position-relative">
  <div class="container-fluid sticky-top">
    <router-link to="/" class="navbar-brand me-5">
         <img src="../assets/images/logo.png" class="nav-logo" alt="logo">
        </router-link>
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
       <router-link  class="btn btn-secondary mt-2" aria-current="page" to="/shopflowers"><i class="bi bi-bag-heart me-2"></i>買一束花吧</router-link>
      <div>
      </div>
    </div>
  </div>
</nav>
</template>

<style lang="scss">
@import "src/assets/all.scss";
.nav-logo{
height:70px;
width:190px;
}
.nav-item:hover{
background-color: $success;
color: $light;
font-weight:bold;
}
</style>
