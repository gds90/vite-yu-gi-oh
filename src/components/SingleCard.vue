<script>
export default {
    name: 'SingleCard',
    props: {
        card: Object
    }
}
</script>
<template lang="">
    <div class="col-5-cards">
        <div class="cards text-center">
            <img :src="card.card_images[0].image_url" :alt="card.name" />
            <h4>{{card.name}}</h4>
            <div class="archetype">{{card.archetype}}</div>
        </div>
    </div>
</template>
<style lang="scss">
@use '../styles/partials/variables' as *;

.col-5-cards {
    width: calc(100% / 5)
}

.cards {
    background-color: $primary_color;
    height: 500px;
    margin-bottom: 20px;


    h4 {
        text-transform: uppercase;
        color: white;
        font-weight: 500;
        margin-top: 5px;
    }

    .archetype {
        font-size: 18px;
    }
}
</style>