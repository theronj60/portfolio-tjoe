<template>
<div id="app">
    <v-app>
        <Navbar />
          <router-view /> 
        <Footer />
    </v-app>
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