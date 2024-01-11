<script>
import { store } from '../store'
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}
</script>
<template lang="">
    <header>
        <div class="container d-flex my-2 ms-2">
            <img id="logo" src="/public/Yu-Gi-Oh!.png" alt="Yu-Gi-Oh!">
            <h1 class="ms-3">{{store.app_title}}</h1>
        </div>
    </header>
</template>
<style lang="scss">
@use '../styles/generals.scss';

header {
    height: 75px;
}

#logo {
    width: 100px
}
</style>