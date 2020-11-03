<template>
  <Layout>
    

    <div class="marketing pt-5">


      <div class="row">
        <div class="col-md-7">
          <h2 class="featurette-heading">Easy way to create Chart
          </h2>
          <p class="lead">Create diagrams with minimal actions,
            use different shapes and colors and
            export it with multiple formats.
          </p>
        </div>
        <div class="col-md-5">
          <img src="@/assets/images/image-blog-flowcharts.png" class="img-fluid" />
        </div>
      </div>

      <hr class="featurette-divider">


      <div class="row">
        <div class="col-md-7 order-last">
          <h2 class="featurette-heading">More Complex Diagrams
          </h2>
          <p class="lead">Create diagrams with minimal actions,
            use different shapes and colors and
            export it with multiple formats.
          </p>
        </div>
        <div class="col-md-5 order-first">
          <img src="@/assets/images/image-blog-complex.png" class="img-fluid" />
        </div>
      </div>

      <hr class="featurette-divider">




    </div>


  </Layout>
</template>






<script>

import Layout from '@/layouts/Layout'

export default {
  components: { Layout, }
}

</script>




<style>
.featurette-divider {
  margin: 5rem 0;
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style>