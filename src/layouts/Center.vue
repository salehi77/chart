<template>
  <div class="root">
    <main>
      <div class="container">
        <slot></slot>
      </div>
    </main>
  </div>
</template>


<script>
import Header from '@/parts/Header'
import Footer from '@/parts/Footer'
export default {
  components: { Header, Footer, }
}
</script>



<style lang="scss" scoped>
main {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > .container {
    max-width: 440px;
  }
}
</style>