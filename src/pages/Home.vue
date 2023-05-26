<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-btn-toggle
          v-model="model"
          spread
          no-caps
          toggle-color="purple"
          color="white"
          text-color="black"
          :options="[
            {value: 'one', slot: 'one'},
            {value: 'two', slot: 'two'}
          ]">
          <template v-slot:one>
            <div class="row items-center no-wrap">
              <q-icon left name="fa-solid fa-scissors" size="xs" />
              <div class="text-center">
                Feminino
              </div>
            </div>
          </template>

          <template v-slot:two>
            <div class="row items-center no-wrap">
              <q-icon left name="fa-solid fa-scissors" size="xs" />
              <div class="text-center">
                Masculino
              </div>
            </div>
          </template>
          </q-btn-toggle>
      </div>
      <q-card class="my-card" flat>
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-h6">Disponíveis Agora</div>
            </div>
            <div class="col-auto">
              <q-btn color="grey-7" round flat icon="fa-solid fa-filter" />
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section class="q-px-sm row no-wrap" style="overflow-x: auto;">
          <div class="q-pr-md" v-for="(nowElement, index) in isNowList" :key="index">
            <q-card class="my-card my-card-carousel" bordered>
              <q-item class="bg-green">
                <q-item-section avatar>
                  <q-avatar>
                    <img :src="nowElement.profileImg">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ `${nowElement.name}, ${nowElement.age}` }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="place"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%);"
                />
                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">
                    <q-rating readonly v-model="nowElement.rate" :max="5" size="32px" />
                  </div>
                  <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                    <q-icon name="place" />
                    {{ nowElement.distance }}
                  </div>
                </div>
              </q-card-section>
              <q-card-section class="q-pt-none flex flex-center">
                <q-chip size="md" :icon="nowElement.isResidential ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark'" color="white" :text-color="nowElement.isResidential ? 'green' : 'red'">
                  Residencial
                </q-chip>
                <q-chip size="md" :icon="nowElement.isSalon ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark'" color="white" :text-color="nowElement.isSalon ? 'green' : 'red'">
                  Salão
                </q-chip>
              </q-card-section>
              <q-card-section>
                <q-chip size="md" icon="fa-solid fa-person" color="white" text-color="warning" v-if="nowElement.waitingRoom > 0">
                  {{ `${nowElement.waitingRoom} ${nowElement.waitingRoom === 1 ? 'Pessoa' : 'Pessoas'} na fila` }}
                </q-chip>
                <q-chip size="md" icon="fa-solid fa-person fa-fade" color="white" text-color="positive" v-if="nowElement.waitingRoom === 0">
                  Sem fila
                </q-chip>
              </q-card-section>
              <q-separator />
              <q-card-actions align="left">
                <q-btn flat color="primary" @click="openWorkerDetails(index, 'nowList')">
                  Selecionar
                </q-btn>
                <q-space />
                <q-btn
                  color="primary"
                  round
                  flat
                  dense
                  @click="nowExpanded[index] = !nowExpanded[index]"
                  :icon="nowExpanded[index] ? 'fa-regular fa-square-minus' : 'fa-solid fa-square-plus'"
                  />
                </q-card-actions>
              <q-slide-transition>
                <div v-show="nowExpanded[index]">
                  <q-separator />
                  <q-card-section class="row q-gutter-sm justify-evenly">
                    <q-badge outline color="positive" v-for="(workerDetail, index) in nowElement.workerDetails" :key="index">
                      {{ workerDetail }}
                    </q-badge>
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card" flat>
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-h6">Agendar</div>
            </div>
            <div class="col-auto">
              <q-btn color="grey-7" round flat icon="fa-solid fa-filter" />
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section class="q-px-sm row no-wrap" style="overflow-x: auto;">
          <div class="q-pr-md" v-for="(scheduledElement, index) in isScheduledList" :key="index">
            <q-card class="my-card my-card-carousel" bordered>
              <q-item class="bg-green">
                <q-item-section avatar>
                  <q-avatar>
                    <img :src="scheduledElement.profileImg">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ `${scheduledElement.name}, ${scheduledElement.age}` }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="place"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%);"
                />
                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">
                    <q-rating readonly v-model="scheduledElement.rate" :max="5" size="32px" />
                  </div>
                  <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                    <q-icon name="place" />
                    {{ scheduledElement.distance }}
                  </div>
                </div>
              </q-card-section>
              <q-card-section class="q-pt-none flex flex-center">
                <q-chip size="md" :icon="scheduledElement.isResidential ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark'" color="white" :text-color="scheduledElement.isResidential ? 'green' : 'red'">
                  Residencial
                </q-chip>
                <q-chip size="md" :icon="scheduledElement.isSalon ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark'" color="white" :text-color="scheduledElement.isSalon ? 'green' : 'red'">
                  Salão
                </q-chip>
              </q-card-section>
              <q-separator />
              <q-card-actions align="left">
                <q-btn flat color="primary" @click="openWorkerDetails(index, 'scheduledList')">
                  Selecionar
                </q-btn>
                <q-btn flat round icon="event" />
                <q-space />

                <q-btn
                  color="primary"
                  round
                  flat
                  dense
                  @click="scheduleExpanded[index] = !scheduleExpanded[index]"
                  :icon="scheduleExpanded[index] ? 'fa-regular fa-square-minus' : 'fa-solid fa-square-plus'"
                  />
              </q-card-actions>
              <q-slide-transition>
                <div v-show="scheduleExpanded[index]">
                  <q-separator />
                  <q-card-section class="row q-gutter-sm justify-evenly">
                    <q-badge outline color="positive" v-for="(workerDetail, index) in scheduledElement.workerDetails" :key="index">
                      {{ workerDetail }}
                    </q-badge>
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
        </q-card-section>
      </q-card>
      <q-dialog
        v-model="workerDetailsDialog"
        persistent
        maximized
        transition-show="slide-up"
        transition-hide="slide-down">
        <q-card>
          <q-fab color="white" text-color="red" padding="sm" icon="close" class="q-fab-position-right" v-close-popup />
          <q-scroll-area style="height: 90vh;">
            <q-card-section class="q-pa-none">

              <q-carousel
                swipeable
                animated
                v-model="slideImg"
                thumbnails
                ref="carousel"
              >
              <template v-for="(workerImg, index) in selectedWorker.workerImgs" :key="index">
                <q-carousel-slide :name="index + 1" :img-src="workerImg" />
              </template>
              <!-- <template v-slot:control>
                <q-carousel-control
                  position="top-right"
                  :offset="[18, 18]"
                >
                  <q-btn rounded dense icon="close" class="bg-white text-red" v-close-popup />
                </q-carousel-control>
              </template> -->
              </q-carousel>
            </q-card-section>
            <q-card-section class="q-pa-none">
              <div class="custom-caption">
                <div class="text-h5">{{ `${selectedWorker.name}, ${selectedWorker.age}` }}</div>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="col-12 col-md-12 row items-center">
                <div class="col-12 col-md-6 q-pa-md">
                  <div class="row flex flex-center float-center text-center">
                    <span class="text-subtitle1 text-bold" style="color: #1f2657"> Local do Serviço </span>
                  </div>
                  <q-select
                    v-model="selectedWorkerValues.localService"
                    :options="optionsLocalService"
                    rounded
                    outlined
                    transition-show="jump-up"
                    transition-hide="jump-up"
                    option-disable="inactive"
                    emit-value
                    map-options
                  />
                </div>
                <div class="col-12 col-md-6 q-pa-md">
                  <div class="row flex flex-center float-center text-center">
                    <span class="text-subtitle1 text-bold" style="color: #1f2657"> Serviços prestados </span>
                  </div>
                  <q-select
                    v-if="optionsProvidedServices.length > 0"
                    v-model="selectedWorkerValues.providedServices"
                    :options="optionsProvidedServices"
                    rounded
                    outlined
                    multiple
                    use-chips
                    transition-show="jump-up"
                    transition-hide="jump-up"
                    emit-value
                    map-options
                  />
                  <q-select
                    v-if="optionsProvidedServices.length === 0"
                    :options="optionsProvidedServices"
                    label="Sem serviços especificados"
                    rounded
                    outlined
                    readonly
                  />
                </div>
              </div>
            </q-card-section>
          </q-scroll-area>
          <q-card-section class="q-px-none q-pb-none fixed-bottom">
            <q-separator />
            <q-card-actions align="right">
              <q-btn flat label="Cancelar" color="primary" v-close-popup />
              <q-btn flat label="Reservar" color="primary" v-close-popup />
            </q-card-actions>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

const workersList = [
  {
    id: 1,
    name: 'Zohan',
    profileImg: 'https://cdn.quasar.dev/img/boy-avatar.png',
    distance: '12km',
    age: 36,
    rate: 4,
    isWorkingNow: true,
    isResidential: false,
    isSalon: true,
    workerDetails: ['Cabelo', 'Manicure', 'Pedicure', 'Chapinha', 'Lavagem', 'Prancha', 'Pontas'],
    workerImgs: [
      'https://cdn.quasar.dev/img/boy-avatar.png',
      'https://cdn.quasar.dev/img/mountains.jpg'
    ],
    waitingRoom: 3
  },
  {
    id: 2,
    name: 'Bina',
    profileImg: 'https://cdn.quasar.dev/img/boy-avatar.png',
    distance: '12km',
    age: 30,
    rate: 5,
    isWorkingNow: true,
    isResidential: true,
    isSalon: true,
    workerDetails: ['Cabelo', 'Manicure', 'Pedicure'],
    workerImgs: [
      'https://cdn.quasar.dev/img/boy-avatar.png',
      'https://cdn.quasar.dev/img/parallax1.jpg'
    ],
    waitingRoom: 1
  },
  {
    id: 3,
    name: 'Leandra',
    profileImg: 'https://cdn.quasar.dev/img/boy-avatar.png',
    distance: '6km',
    age: 36,
    rate: 2,
    isWorkingNow: true,
    isResidential: true,
    isSalon: false,
    workerDetails: [],
    workerImgs: [
      'https://cdn.quasar.dev/img/boy-avatar.png',
      'https://cdn.quasar.dev/img/parallax2.jpg'
    ],
    waitingRoom: 0
  },
  {
    id: 4,
    name: 'David',
    profileImg: 'https://cdn.quasar.dev/img/boy-avatar.png',
    distance: '12km',
    age: 36,
    rate: 4,
    isWorkingNow: false,
    isResidential: false,
    isSalon: true,
    workerDetails: ['Cabelo', 'Manicure', 'Pedicure', 'Chapinha', 'Lavagem', 'Prancha', 'Pontas'],
    workerImgs: [
      'https://cdn.quasar.dev/img/boy-avatar.png',
      'https://cdn.quasar.dev/img/quasar.jpg'
    ],
    waitingRoom: 0
  },
  {
    id: 5,
    name: 'Katrina',
    profileImg: 'https://cdn.quasar.dev/img/boy-avatar.png',
    distance: '12km',
    age: 30,
    rate: 5,
    isWorkingNow: false,
    isResidential: false,
    isSalon: true,
    workerDetails: ['Cabelo', 'Manicure', 'Pedicure', 'Chapinha', 'Lavagem', 'Prancha', 'Pontas'],
    workerImgs: [
      'https://cdn.quasar.dev/img/boy-avatar.png',
      'https://cdn.quasar.dev/img/parallax1.jpg',
      'https://cdn.quasar.dev/img/parallax2.jpg'
    ],
    waitingRoom: 0
  },
  {
    id: 6,
    name: 'Violeta',
    profileImg: 'https://cdn.quasar.dev/img/boy-avatar.png',
    distance: '6km',
    age: 36,
    rate: 2,
    isWorkingNow: false,
    isResidential: true,
    isSalon: false,
    workerDetails: ['Cabelo', 'Manicure', 'Pedicure', 'Chapinha', 'Lavagem', 'Prancha', 'Pontas'],
    workerImgs: [
      'https://cdn.quasar.dev/img/boy-avatar.png',
      'https://cdn.quasar.dev/img/parallax2.jpg',
      'https://cdn.quasar.dev/img/quasar.jpg'
    ],
    waitingRoom: 0
  }
]

export default defineComponent({
  name: 'HomeUser',
  setup () {
    return {
      workersList,
      selectedIndex: ref(0),
      typeSelectedList: ref(''),
      slideImg: ref(1),
      workerDetailsDialog: ref(false),
      slide: ref('style'),
      model: ref('one'),
      secondModel: ref('one'),
      nowExpanded: ref([]),
      scheduleExpanded: ref([]),
      optionsLocalService: ref([
        {
          label: 'Residencial',
          value: 'residential',
          inactive: false
        },
        {
          label: 'Salão',
          value: 'salon',
          inactive: false
        }
      ]),
      optionsProvidedServices: ref([
        {
          label: null,
          value: null
        }
      ]),
      selectedWorkerValues: ref({
        localService: {
          label: null,
          value: null
        },
        providedServices: []
      })
    }
  },
  computed: {
    isNowList () {
      return this.workersList.filter(v => v.isWorkingNow)
    },
    isScheduledList () {
      return this.workersList.filter(v => !v.isWorkingNow)
    },
    selectedWorker () {
      return this.typeSelectedList === 'nowList' ? this.isNowList[this.selectedIndex] : this.isScheduledList[this.selectedIndex]
    }
  },
  methods: {
    openWorkerDetails (index, typeList) {
      this.typeSelectedList = typeList
      this.selectedIndex = index
      this.workerDetailsDialog = true
      this.slideImg = 1
      this.setSelectWorkerLocalServices()
      this.setSelectWorkerProvidedServices()
    },
    setSelectWorkerLocalServices () {
      this.optionsLocalService = [
        {
          label: 'Residencial',
          value: 'residential',
          inactive: !this.selectedWorker.isResidential
        },
        {
          label: 'Salão',
          value: 'salon',
          inactive: !this.selectedWorker.isSalon
        }
      ]
      this.selectedWorkerValues.localService = {
        label: this.selectedWorker.isResidential ? 'Residencial' : this.selectedWorker.isSalon ? 'Salão' : null,
        value: this.selectedWorker.isResidential ? 'residential' : this.selectedWorker.isSalon ? 'salon' : null
      }
    },
    setSelectWorkerProvidedServices () {
      this.optionsProvidedServices = this.selectedWorker.workerDetails.map((v, index) => { return { label: v, value: index + 1 } })
    }
  }
})
</script>

<style lang="sass" scoped>
  .my-card-carousel
    width: 80vw
  .custom-caption
    text-align: center
    padding: 12px
    color: white
    background-color: rgba(0, 0, 0, .3)
  .q-fab-position-right
    position: absolute
    right: 0px
    margin-top: 18px
    margin-right: 18px

</style>
