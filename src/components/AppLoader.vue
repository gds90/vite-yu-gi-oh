<script>
debugger

import { store } from '../store';
export default {
    name: 'AppLoader',
    data() {
        return {
            store,
        }
    }
}
</script>
<template lang="">
    <div>
        <div class="loader">
        </div>
        <div class="text">
            {{store.app_title}}
            <br>
            Loading...
        </div>
    </div>
</template>
<style lang="scss">
@use '../styles/partials/variables' as *;

.loader {
    border: 16px solid #f3f3f3;
    /* Light grey */
    border-top: 16px solid $primary_color;
    /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    position: absolute;
    left: 46%;
    top: 50%;
    z-index: 1;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.text {
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    position: absolute;
    left: 41%;
    top: 35%;
    z-index: 1;
}
</style>