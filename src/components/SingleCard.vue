<script>
export default {
    name: 'SingleCard',
    props: {
        card: Object
    },
    data() {
        return {

        }
    }

}
</script>
<template lang="">
    <div class="col-12 col-md-6 col-lg-3">
        <div class="cards text-center">
            <img :src="card.card_images[0].image_url" :alt="card.name" />
            <h3>{{card.name}}</h3>
            <div class="archetype">{{card.archetype}}</div>
        </div>
    </div>
</template>
<style lang="scss">
@use '../styles/partials/variables' as *;

.cards {
    background-color: $primary_color;
    height: 550px;
    margin-bottom: 20px;


    h3 {
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