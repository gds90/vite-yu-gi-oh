import { reactive } from 'vue';

export const store = reactive({
    app_title: 'Yu-Gi-Oh Api',
    endpoint: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    cardsList: [],
    loading: true,
    archetypeArray: [],
    archetype: ''
});