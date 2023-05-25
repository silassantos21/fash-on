<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated v-if="$route.fullPath !== '/profile'">
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>

        <q-toolbar-title>
          Silas Santos
        </q-toolbar-title>

        <q-btn flat round dense icon="fa-solid fa-bell">
          <q-badge floating color="red">2</q-badge>
        </q-btn>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class=“fixed-bottom”>
      <q-tabs
      v-model="tab"
      switch-indicator
      align="justify"
      class="bg-primary text-white"
      :breakpoint="0"
      >
        <q-route-tab no-caps name="inicio" :label="tab === 'inicio' ? 'Início' : ''" icon="fa-solid fa-house" to="/home"  />
        <q-route-tab no-caps name="agendamentos" :label="tab === 'agendamentos' ? 'Agendamentos' : ''" icon="fa-solid fa-calendar-days" to="/schedules" />
        <q-route-tab no-caps name="favoritos" :label="tab === 'favoritos' ? 'Favoritos' : ''" icon="fa-solid fa-star" to="/favorites" />
        <q-route-tab no-caps name="perfil" :label="tab === 'perfil' ? 'Perfil' : ''" icon="fa-solid fa-user" to="/profile" />
      </q-tabs>
      </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'

// const linksList = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ]

export default defineComponent({
  name: 'MainLayout',

  // components: {
  //   EssentialLink
  // },

  setup () {
    // const leftDrawerOpen = ref(false)
    const tab = ref('inicio')

    return {
      // essentialLinks: linksList,
      // leftDrawerOpen,
      tab
      // toggleLeftDrawer () {
      //   leftDrawerOpen.value = !leftDrawerOpen.value
      // }
    }
  }
})
</script>
