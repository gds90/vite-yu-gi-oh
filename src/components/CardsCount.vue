<script>
import { store } from '../store';

export default {
    name: 'CardsCount',
    data() {
        return {
        }
    },
    computed: {
        cardsNumber() {
            return store.cardsList.length;
        }
    }

}
</script>
<template lang="">
    <div class="container my-3">
        <div v-if="cardsNumber > 0">Found <span class="fw-bold">{{cardsNumber}}</span> cards</div>
        <div v-else>No cards found for archetype {{store.archetype}}</div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

span {
    color: $primary_color;
}
</style>