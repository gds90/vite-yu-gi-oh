<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

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
    AppMain
  },
  methods: {
    getCardsList() {
      axios.get(store.endpoint).then((response) => {
        this.store.cardsList = response.data.data
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
    <AppHeader />
    <AppMain />
  </div>
</template>
<style lang="">
  
</style>