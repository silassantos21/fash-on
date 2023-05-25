<template>
  <q-page>

    <!-- <q-icon
      name="fa-solid fa-user"
      class="text-grey"
      size="xl"
    /> -->
    <div class="q-pa-md">
      <div class="row q-mx-md">
        <div class="col-12 col-md-12 row items-center justify-between">
          <div class="q-pr-md">
            <q-avatar size="100px">
              <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
          </div>
          <div class="q-mr-auto">
            <div class="text-h5 text-bold">Silas</div>
            <div class="text-subtitle">Editar Perfil</div>
          </div>
        </div>
      </div>
      <div class="q-mt-md">
        <q-list v-for="link in profileLinks" :key="link.name">
          <q-item clickable v-ripple class="q-py-md" :to="link.route">
            <q-item-section avatar>
              <q-icon color="primary" :name="link.icon" />
            </q-item-section>
            <q-item-section>{{ link.name }}</q-item-section>
            <q-item-section side>
              <q-icon size="xs" name="fa-solid fa-angle-right" />
            </q-item-section>
          </q-item>
          <q-separator />
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

const profileMenu = [
  {
    name: 'Histórico',
    icon: 'fa-solid fa-list-ul',
    route: '/history'
  },
  {
    name: 'Agendamentos',
    icon: 'fa-solid fa-calendar-days',
    route: '/schedules'
  },
  {
    name: 'Favoritos',
    icon: 'fa-solid fa-star',
    route: '/favorites'
  },
  {
    name: 'Meus endereços',
    icon: 'fa-solid fa-location-dot',
    route: '/user-addresses'
  },
  {
    name: 'Formas de pagamento',
    icon: 'fa-solid fa-wallet',
    route: '/payments'
  },
  {
    name: 'Notificações',
    icon: 'fa-solid fa-bell',
    route: '/notifies'
  },
  {
    name: 'Ajuda',
    icon: 'fa-sharp fa-regular fa-circle-question',
    route: '/help'
  },
  {
    name: 'Sair',
    icon: 'fa-solid fa-door-open',
    route: '/logout'
  }
]

export default defineComponent({
  name: 'ProfileUser',
  setup () {
    const text = ref('teste')
    return {
      profileLinks: profileMenu,
      text
    }
  }
})
</script>
