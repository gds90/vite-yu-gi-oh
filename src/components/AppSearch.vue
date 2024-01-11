<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'AppSearch',
    data() {
        return {
            store
        }
    },
    methods: {
        getArchetypeList() {
            axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((response) => {
                this.store.archetypeArray = response.data;

            })
        }
    },
    created() {
        this.getArchetypeList();
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <label for="filter" class="control-label">Filter for archetype:</label>
                <select id="filter" v-model="store.archetype" class="form-select my-3"  @change="$emit('filter_archetype')">
                    <option value="" selected>Select archetype</option>
                    <option v-for="archetype, index in this.store.archetypeArray" :key="index" :value="archetype">
                        {{archetype.archetype_name}}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>