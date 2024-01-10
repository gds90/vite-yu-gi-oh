<script>
import SingleCard from './SingleCard.vue';
import { store } from '../store'

export default {
    name: 'CardsContainer',
    data() {
        return {
            store,
        }
    },
    components: {
        SingleCard,
    }

}
</script>
<template lang="">
    <div class="container">
        <div class="row p-5 bg-white">
            <SingleCard v-for="card, index in store.cardsList" :key="index" :card="card" />
        </div>
    </div>
</template>
<style lang="">
    
</style>