<template>
  <v-app dark>
    <v-toolbar>
      <v-toolbar-title>FAW Turing Store</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
         <v-btn
          v-for="item in menu"
          :key="item.icon"
          :to="item.link"
          flat
          @click="route(item.route)"
        >{{ item.title }}</v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menu" :key="item.icon">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
             </v-list-tile-content>
          </v-list-tile>   
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      menu: [
        { icon: '', title: 'Signup', route: '/signup' },
        { icon: 'fa-sign-in-alt', title: 'Login', route: '/login' }
      ]
    }
  },
  methods: {
    route(route) {
      this.$router.push(route);
    }
  }
}
</script>
