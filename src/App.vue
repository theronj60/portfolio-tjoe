<template>
<div id="app">
    <v-app>
        <Navbar />
        <transition name="view" mode="out-in" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
            <router-view /> 
        </transition>
                      
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
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css";

    .fadeInRight {
        -webkit-animation-name: fadeInRight;
        animation-name: fadeInRight;
        -webkit-animation-duration: .5s;
        animation-duration: .5s;
        animation-delay: .2s;
        transition-duration: .2s;
    }
    .fadeOutLeft {
        -webkit-animation-name: fadeOutLeft;
        animation-name: fadeOutLeft;
        -webkit-animation-duration: .5s;
        animation-duration: .5s;
    }
    
    

</style>