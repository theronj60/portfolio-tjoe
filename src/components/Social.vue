<template>

    <v-layout justify-space-around>

    <v-btn
        v-for="(social, i) in socials"
        :key="i"
        :color="social.color"
        class="white--text"
        fab
        icon
        small
    >
        <a class="links" :href="social.url"><v-icon :color="social.color">{{ social.icon }}</v-icon></a>
    </v-btn>

    </v-layout>

</template>

<script>
export default {
    data: () => ({
        socials: [
            {
                icon: 'mdi-facebook-box',
                color: 'blue darken-4',
                url: 'https://www.facebook.com/sociallyawkwardgamer'
            },
            {
                icon: 'mdi-instagram',
                color: 'purple accent-3',
                url: 'https://www.instagram.com/dkjoe60/'
            },
            {
                icon: 'mdi-linkedin-box',
                color: 'blue lighten-1',
                url: 'https://www.linkedin.com/in/theron-joe-1681b6139/'
            },
            {
                icon: 'mdi-github-box',
                color: 'grey darken-5',
                url: 'https://github.com/theronj60'
            },
        ]
    })
}
</script>

<style>
    .links {
        text-decoration: none;
    }
</style>
