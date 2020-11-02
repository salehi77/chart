<template>
  <div class="root">
    <Header />
    <main role="main">
      <div class="container pt-5">
        <slot></slot>
      </div>
    </main>
    <Footer />
  </div>
</template>


<script>
import Header from '@/parts/Header'
import Footer from '@/parts/Footer'
export default {
  components: { Header, Footer, }
}
</script>


<style>
</style>