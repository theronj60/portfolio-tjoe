<template>
<div id="app">
    <v-app>
        <Navbar />
        <transition name="view">
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
    .view-enter-active, .view-leave-active {
        transition: opacity 0.8s ease-in-out, transform 0.5s ease;
    }
    .view-enter-active {
        transition-delay: 0.8s;
        
    }
    .view-enter {
        opacity: 0;
        transform: translateX(-100px);
    }

    .view-enter-to {
        opacity: 1;
        transform: translateX(0px);
    }

    .view-leave {
        opacity: 1;
        transform: translateX(0px);
    }
    .view-leave-to {
        opacity: 0;
        transform: translateX(100px);

    }
    

</style>