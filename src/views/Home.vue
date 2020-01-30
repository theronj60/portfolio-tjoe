<template>
<v-content justify-center align-center class="home">
    <v-container fluid class="fill-height">
        <v-card
        max-width="1366"
        width="100%"
        class="mx-auto fill-height"
        id="v-background"
        dark
        >
            
            <v-row>
                <v-col class="align-self-center">
                    <h1 class="text-center">testing</h1>
                </v-col>
            </v-row>

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
    #v-background {
        background-color: rgba(0,0,0, 0.6);
        /* display: flex; */
    }
    .home {
        background-image: url('../assets/step-1.jpg');
        background-size: cover;
        color: white;
    }
    .home .row {
        height: 100%;
    }

</style>

