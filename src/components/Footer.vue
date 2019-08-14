<template>
    <v-footer
      absolute
      class="font-weight-medium"
      dark
      tile
      app
    >
      
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        <v-spacer></v-spacer>
        <Social />
     
      
    </v-footer>
</template>

<script>
import Social from '@/components/Social.vue';

export default {
  components: {
    Social,
  }
}
</script>
