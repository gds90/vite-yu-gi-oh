<script>
import CardsContainer from './CardsContainer.vue';
export default {
    name: 'AppMain',
    components: {
        CardsContainer
    }
}
</script>
<template lang="">
    <main>
        <CardsContainer />
    </main>
</template>
<style lang="scss">
@use '../styles/partials/variables' as *;

main {
    background-color: $primary_color;
    padding-top: 50px;
}
</style>