<template>
<v-content justify-center align-center class="home">
    <v-container fluid class="fill-height">
        <v-card
        max-width="1366"
        width="100%"
        class="mx-auto fill-height"
        id="v-home"
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
// @ is an alias to /src

export default {
    name: 'home',
    components: {

    }
}
</script>

<style>
    #v-home {
        background-color: rgba(0,0,0, 0.6);
    }
    .home {
        background-image: url('../assets/step-1.jpg');
        background-size: cover;
        color: white;
    }

</style>

