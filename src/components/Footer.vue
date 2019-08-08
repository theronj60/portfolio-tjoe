<template>
    <v-footer
      absolute
      class="font-weight-medium"
      dark
      tile
      app
    >
      <v-flex
        xs12
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        <Social />
      </v-flex>
      
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
