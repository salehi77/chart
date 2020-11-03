<template>



<header>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <div class="container">

      <router-link class="navbar-brand" to="">
        <img src="/logo.png" width="30" height="30" alt="Chart Logo" loading="lazy" class="img-fluid">
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarCollapse">

        <ul class="navbar-nav mr-auto mb-2 mb-md-0">
          <li class="nav-item" v-for="section in sections" :key="section">
            <router-link class="nav-link" to="" tabindex="-1">{{section}}</router-link>
          </li>
        </ul>



        <div class="col d-flex justify-content-end align-items-center">
          <div v-if="!user">
            <router-link class="btn btn-sm btn-outline-primary mx-2" to="/signin">Sign in</router-link>
            <router-link class="btn btn-sm btn-primary" to="/signup">Sign up</router-link>
          </div>

          <div v-else class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
              User
            </button>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/dashboard">Dashboard</router-link>
              <router-link class="dropdown-item" to="">Logout</router-link>
            </div>
          </div>

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
      ],
      user: null,
    }
  }
}
</script>