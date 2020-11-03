<template>
  <Layout>

    <div class="border rounded p-3 shadow ">
      <div class="text-center">
        <router-link to="/"><img class="mb-4" src="/bootstrap.svg" width="72" height="72"></router-link>
      </div>

      <form>
        <div class="form-group">
          <label for="emailLogin">Email address</label>
          <input type="email" class="form-control" id="emailLogin" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
          <label for="passwordLogin">Password</label>
          <input type="password" class="form-control" id="passwordLogin">
        </div>
        <div class="form-group">
          <label for="rePasswordLogin">Re-Password</label>
          <input type="password" class="form-control" id="rePasswordLogin">
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
        </div>
        <div class="py-3">
          <Divider />
        </div>
        <div class="form-group">
          <button class="btn btn-block btn-primary google-btn" type="button">
            <span><i class="fab fa-google-plus-g"></i> Sign up with Google+</span>
          </button>
        </div>
        <div class="form-group">
          <p class="text-center">Already have account? <router-link to="/signin">Sign in here</router-link></p>
        </div>
      </form>

    </div>


  </Layout>
</template>






<script>

import Layout from '@/layouts/Center'
import Divider from '@/components/Divider'

export default {
  components: { Layout, Divider }
}

</script>




<style scoped>
.google-btn {
  background-color: #dd4b39;
}
.github-btn {
  background-color: #444444;
}
</style>