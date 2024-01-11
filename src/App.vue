<script>
import AppHeader from './components/AppHeader.vue';
import AppLoader from './components/AppLoader.vue';
import CardsContainer from './components/CardsContainer.vue';
import AppSearch from './components/AppSearch.vue'

import { store } from './store';
import axios from 'axios';
export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppLoader,
    CardsContainer,
    AppSearch
  },
  methods: {
    getCardsList() {

      if (store.archetype !== '') {
        let apiUrl = this.store.endpoint;

        apiUrl += `&archetype=${this.store.archetype.archetype_name}`
        console.log(apiUrl)

        axios.get(apiUrl).then((response) => {
          this.store.cardsList = response.data.data;
          this.store.loading = false;
        });
      }
      else {
        axios.get(store.endpoint).then((response) => {
          this.store.cardsList = response.data.data;
          this.store.loading = false;
        });
      }
    }
  },
  created() {
    this.getCardsList();
  },
}
</script>
<template lang="">
  <div>
    <AppLoader v-if="store.loading"/> <!-- Loader con v-if sulla variabile loading -->
    <div v-else>
      <AppHeader />
      <AppSearch @filter_archetype="getCardsList"/>
      <main>
        <CardsContainer />
      </main>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use './styles/partials/variables' as *;

main {
  background-color: $primary_color;
  padding-top: 50px;
}
</style>