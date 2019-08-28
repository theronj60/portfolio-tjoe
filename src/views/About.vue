<template>
<v-content justify-center align-center class="about">
    <v-container fluid class="fill-height">
        <v-card
        max-width="1366"
        width="100%"
        class="mx-auto fill-height"
        id="v-background"
        dark
        >

            <v-row class="px-6">
              <v-col cols="12" sm="6" class="text-center align-self-center">
                <v-img max-height="500" contain class="mx-auto" src="../assets/about-profile.jpg"></v-img>
              </v-col>
              <v-col cols="12" sm="6" class="text-center align-self-center">
                <p>
                  I currently reside in Southern Utah, with my wonderful family. I am a proud member of the Navajo tribe. I like to spend time with my family. I like to be outdoors. I hope to one day share my skill with my tribe and contribute to non-profit organizations. I am always learning new things and pushing myself to be better than the day before. My attention to detail and persistence allows me to build organized, clean code.
                </p>
                <p>
                  When I finished my first website it made me realize that I’m one step closer to achieving my goals and providing a better life for my family. From working in kitchens and metal shops, to joining an on-line program called Skillcrush, I am now a front-end web developer. What once started out as a hobby has now become my passion.
                </p>
                <v-btn class="mt-6" to="/contact">Let's chat!</v-btn>
              </v-col>
            </v-row>

         </v-card>
    </v-container>
</v-content>
</template>

<script>
export default {
    name: 'about',
    components: {

    }
}
</script>

<style>
  .about {
    background-image: url('../assets/step-2.jpg');
    background-size: cover;
  }
  .about p {
    font-size: 16px;
  }
  .about .row {
    height: 100%;
  }
  
</style>

