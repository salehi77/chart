<template>



<header>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <div class="container">

      <router-link class="navbar-brand" to="">
        <img src="/logo.png" width="30" height="30" alt="Chart Logo" loading="lazy" class="img-fluid">
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarCollapse">

        <ul class="navbar-nav mr-auto mb-2 mb-md-0">
          <li class="nav-item" v-for="section in sections" :key="section">
            <router-link class="nav-link" to="" tabindex="-1" aria-disabled="true">{{section}}</router-link>
          </li>
        </ul>



        <div class="col d-flex justify-content-end align-items-center">
          <router-link class="btn btn-sm btn-outline-primary mx-2" to="/signin">Sign in</router-link>
          <router-link class="btn btn-sm btn-primary" to="/signup">Sign up</router-link>
        </div>


      </div>

    </div>

  </nav>

</header>




</template>





<script>
export default {
  data() {
    return {
      sections: [
        'Features', 'Pricing', 'Help', 'Store'
      ]
    }
  }
}
</script>