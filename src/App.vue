<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppLoader from './components/AppLoader.vue';

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
    AppMain,
    AppLoader
  },
  methods: {
    getCardsList() {
      axios.get(store.endpoint).then((response) => {
        this.store.cardsList = response.data.data;
        this.store.loading = false;
      });
    }
  },
  created() {
    this.getCardsList();
  },
}
</script>
<template lang="">
  <div>
    <AppLoader v-if="store.loading"/>
    <div v-else>
      <AppHeader />
      <AppMain />
    </div>
  </div>
</template>
<style lang="">
  
</style>