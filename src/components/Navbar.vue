<template>
  <div id="nav">
      <v-navigation-drawer
      v-model="drawerRight"
      app
      dark
      clipped
      right
      width="150"
    >
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
              <v-flex 12>
                  <NavBtns />
              </v-flex>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      dense
      dark
      clipped-right
    >
        
      
          <v-toolbar-title>Page title</v-toolbar-title>

          <v-spacer></v-spacer>
          <div class="hidden-sm-and-down">
              <NavBtns />
          </div>
        
          <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
        
        

  
      
    </v-app-bar>

    
  </div>
</template>

<script>
import NavBtns from '@/components/NavBtns.vue';

export default {
    name: 'navbar',
    components:{
        NavBtns
    },
    data: () => ({
      drawerRight: false,
    }),
}
</script>


