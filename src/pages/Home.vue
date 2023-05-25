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
            {label: 'Feminino', value: 'one'},
            {label: 'Masculino', value: 'two'}
          ]"
        />
      </div>
      <q-card class="my-card" flat>
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-h6">Disponíveis</div>
            </div>
            <div class="col-auto">
              <q-btn color="grey-7" round flat icon="fa-solid fa-filter" />
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section class="q-px-sm row no-wrap" style="overflow-x: auto;">
          <div class="q-pr-md">
            <q-card class="my-card my-card-carousel" bordered>
              <q-item class="bg-green">
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Zohan, 36</q-item-label>
                  <!-- <q-item-label caption>
                    Subhead
                  </q-item-label> -->
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
                    <q-rating v-model="stars" :max="5" size="32px" />
                  </div>
                  <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                    <q-icon name="place" />
                    250 ft
                  </div>
                </div>
              </q-card-section>
              <q-card-section class="q-pt-none flex flex-center">
                <q-chip size="md" icon="fa-solid fa-circle-check" color="white" text-color="green">
                  Residencial
                </q-chip>
                <q-chip size="md" icon="fa-solid fa-circle-xmark" color="white" text-color="red">
                  Salão
                </q-chip>
              </q-card-section>
              <q-separator />
              <q-card-actions align="left">
                <q-btn flat color="primary">
                  Reservar
                </q-btn>
                <q-btn flat round icon="event" />
                <q-space />

                <q-btn
                  color="primary"
                  round
                  flat
                  dense
                  @click="expanded = !expanded"
                  :icon="expanded ? 'fa-regular fa-square-minus' : 'fa-solid fa-square-plus'"
                  />
                </q-card-actions>
              <q-slide-transition>
                <div v-show="expanded">
                  <q-separator />
                  <q-card-section class="row q-gutter-sm justify-evenly">
                    <!-- <q-icon name="fa-brands fa-whatsapp" size="sm"/>
                    <q-icon name="fa-solid fa-hand" size="sm"/>
                    <q-icon name="fa-solid fa-shoe-prints fa-rotate-270" size="sm"/>
                    <q-icon name="self_care" size="sm"/>
                    <q-icon name="fa-solid fa-scissors" size="sm"/> -->
                    <q-badge outline color="positive" label="Cabelo" />
                    <q-badge outline color="positive" label="Manicure" />
                    <q-badge outline color="positive" label="Pedicure" />
                    <q-badge outline color="positive" label="Chapinha" />
                    <q-badge outline color="positive" label="Lavagem" />
                    <q-badge outline color="positive" label="Prancha" />
                    <q-badge outline color="positive" label="Pontas" />
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
          <div class="q-pr-md">
            <q-card class="my-card my-card-carousel" bordered>
              <q-item class="bg-green">
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Zohan, 36</q-item-label>
                  <!-- <q-item-label caption>
                    Subhead
                  </q-item-label> -->
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
                    <q-rating v-model="stars" :max="5" size="32px" />
                  </div>
                  <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                    <q-icon name="place" />
                    250 ft
                  </div>
                </div>
              </q-card-section>
              <q-card-section class="q-pt-none flex flex-center">
                <q-chip size="md" icon="fa-solid fa-circle-check" color="white" text-color="green">
                  Residencial
                </q-chip>
                <q-chip size="md" icon="fa-solid fa-circle-xmark" color="white" text-color="red">
                  Salão
                </q-chip>
              </q-card-section>
              <q-separator />
              <q-card-actions align="left">
                <q-btn flat color="primary">
                  Reservar
                </q-btn>
                <q-btn flat round icon="event" />
                <q-space />

                <q-btn
                  color="primary"
                  round
                  flat
                  dense
                  @click="expanded = !expanded"
                  :icon="expanded ? 'fa-regular fa-square-minus' : 'fa-solid fa-square-plus'"
                  />
                </q-card-actions>
              <q-slide-transition>
                <div v-show="expanded">
                  <q-separator />
                  <q-card-section class="row q-gutter-sm justify-evenly">
                    <!-- <q-icon name="fa-brands fa-whatsapp" size="sm"/>
                    <q-icon name="fa-solid fa-hand" size="sm"/>
                    <q-icon name="fa-solid fa-shoe-prints fa-rotate-270" size="sm"/>
                    <q-icon name="self_care" size="sm"/>
                    <q-icon name="fa-solid fa-scissors" size="sm"/> -->
                    <q-badge outline color="positive" label="Cabelo" />
                    <q-badge outline color="positive" label="Manicure" />
                    <q-badge outline color="positive" label="Pedicure" />
                    <q-badge outline color="positive" label="Chapinha" />
                    <q-badge outline color="positive" label="Lavagem" />
                    <q-badge outline color="positive" label="Prancha" />
                    <q-badge outline color="positive" label="Pontas" />
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
          <div class="q-pr-md">
            <q-card class="my-card my-card-carousel" bordered>
              <q-item class="bg-green">
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Zohan, 36</q-item-label>
                  <!-- <q-item-label caption>
                    Subhead
                  </q-item-label> -->
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
                    <q-rating v-model="stars" :max="5" size="32px" />
                  </div>
                  <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                    <q-icon name="place" />
                    250 ft
                  </div>
                </div>
              </q-card-section>
              <q-card-section class="q-pt-none flex flex-center">
                <q-chip size="md" icon="fa-solid fa-circle-check" color="white" text-color="green">
                  Residencial
                </q-chip>
                <q-chip size="md" icon="fa-solid fa-circle-xmark" color="white" text-color="red">
                  Salão
                </q-chip>
              </q-card-section>
              <q-separator />
              <q-card-actions align="left">
                <q-btn flat color="primary">
                  Reservar
                </q-btn>
                <q-btn flat round icon="event" />
                <q-space />

                <q-btn
                  color="primary"
                  round
                  flat
                  dense
                  @click="expanded = !expanded"
                  :icon="expanded ? 'fa-regular fa-square-minus' : 'fa-solid fa-square-plus'"
                  />
                </q-card-actions>
              <q-slide-transition>
                <div v-show="expanded">
                  <q-separator />
                  <q-card-section class="row q-gutter-sm justify-evenly">
                    <!-- <q-icon name="fa-brands fa-whatsapp" size="sm"/>
                    <q-icon name="fa-solid fa-hand" size="sm"/>
                    <q-icon name="fa-solid fa-shoe-prints fa-rotate-270" size="sm"/>
                    <q-icon name="self_care" size="sm"/>
                    <q-icon name="fa-solid fa-scissors" size="sm"/> -->
                    <q-badge outline color="positive" label="Cabelo" />
                    <q-badge outline color="positive" label="Manicure" />
                    <q-badge outline color="positive" label="Pedicure" />
                    <q-badge outline color="positive" label="Chapinha" />
                    <q-badge outline color="positive" label="Lavagem" />
                    <q-badge outline color="positive" label="Prancha" />
                    <q-badge outline color="positive" label="Pontas" />
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
          <div>
            <q-card class="my-card my-card-carousel" bordered>
              <q-item class="bg-green">
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Zohan, 36</q-item-label>
                  <!-- <q-item-label caption>
                    Subhead
                  </q-item-label> -->
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
                    <q-rating v-model="stars" :max="5" size="32px" />
                  </div>
                  <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                    <q-icon name="place" />
                    250 ft
                  </div>
                </div>
              </q-card-section>
              <q-card-section class="q-pt-none flex flex-center">
                <q-chip size="md" icon="fa-solid fa-circle-check" color="white" text-color="green">
                  Residencial
                </q-chip>
                <q-chip size="md" icon="fa-solid fa-circle-xmark" color="white" text-color="red">
                  Salão
                </q-chip>
              </q-card-section>
              <q-separator />
              <q-card-actions align="left">
                <q-btn flat color="primary">
                  Reservar
                </q-btn>
                <q-btn flat round icon="event" />
                <q-space />

                <q-btn
                  color="primary"
                  round
                  flat
                  dense
                  @click="expanded = !expanded"
                  :icon="expanded ? 'fa-regular fa-square-minus' : 'fa-solid fa-square-plus'"
                  />
                </q-card-actions>
              <q-slide-transition>
                <div v-show="expanded">
                  <q-separator />
                  <q-card-section class="row q-gutter-sm justify-evenly">
                    <!-- <q-icon name="fa-brands fa-whatsapp" size="sm"/>
                    <q-icon name="fa-solid fa-hand" size="sm"/>
                    <q-icon name="fa-solid fa-shoe-prints fa-rotate-270" size="sm"/>
                    <q-icon name="self_care" size="sm"/>
                    <q-icon name="fa-solid fa-scissors" size="sm"/> -->
                    <q-badge outline color="positive" label="Cabelo" />
                    <q-badge outline color="positive" label="Manicure" />
                    <q-badge outline color="positive" label="Pedicure" />
                    <q-badge outline color="positive" label="Chapinha" />
                    <q-badge outline color="positive" label="Lavagem" />
                    <q-badge outline color="positive" label="Prancha" />
                    <q-badge outline color="positive" label="Pontas" />
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <!-- <q-icon
      name="home"
      class="text-grey"
      size="xl"
    /> -->
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HomeUser',
  setup () {
    return {
      slide: ref('style'),
      model: ref('one'),
      secondModel: ref('one'),
      expanded: ref(true),
      stars: ref(4)
    }
  }
})
</script>

<style lang="sass" scoped>
  .my-card-carousel
    width: 80vw
</style>
