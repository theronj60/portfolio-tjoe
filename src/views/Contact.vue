<template>
    <v-content justify-center align-center class="contact">
    <v-container fluid class="fill-height">
        <v-card
        max-width="1366"
        width="100%"
        class="mx-auto fill-height"
        id="v-background"
        dark
        >
            <v-card-title>I'm a title</v-card-title>
            <v-card-text>I'm card text</v-card-text>
            <v-card-actions>
                <v-btn text>Click</v-btn>
            </v-card-actions>
         </v-card>
    </v-container>
</v-content>
</template>

<script>
export default {
    name: 'contact',
    components: {

    }
}
</script>

<style>
  .contact {
    background-image: url('../assets/step-5.jpg');
    background-size: cover;
  }
</style>
