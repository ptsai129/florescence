<template>
<nav class="navbar  fixed-top navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid sticky-top">
    <router-link to="/" class="navbar-brand me-auto">
         <img src="src/assets/images/logo.png" alt="logo">
        </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <router-link  class="nav-link" aria-current="page" to="/about">關於我們</router-link>
        </li>
        <li class="nav-item">
        <router-link  class="nav-link" aria-current="page" to="/shopflowers">選購花禮</router-link>
        </li>
        <li class="nav-item">
         <router-link  class="nav-link" aria-current="page" to="/faq">訂花需知</router-link>
        </li>
      </ul>
      <a href="#" class="btn btn-primary mt-2"><i class="bi bi-bag-heart me-2"></i>買一束花吧</a>
      <div>
      </div>
    </div>
  </div>
</nav>
<router-view></router-view>
</template>

<style lang="scss">
</style>
