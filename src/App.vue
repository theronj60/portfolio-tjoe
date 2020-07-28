<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
      <main class="flex-grow">
        <router-view /> 
      </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'app',
    components: {
        Navbar,
        Footer
    }
}
</script>

<style>


</style>