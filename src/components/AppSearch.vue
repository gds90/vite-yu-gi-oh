<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'AppSearch',
    data() {
        return {
            store,
            myArchetypeArray: []
        }
    },
    methods: {
        getArchetypeList() {
            axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((response) => {
                this.store.archetypeArray = response.data;

                // CHECK SE ARCHETYPE PRESENTE TRA LE CARTE IN LISTA
                this.store.archetypeArray.forEach(elem => {
                    for (let i = 0; i < this.store.cardsList.length; i++) {
                        if (elem.archetype_name == this.store.cardsList[i].archetype) {
                            // CHECK SE NELL'ARRAY DEI MIEI ARCHETYPES è GIA' PRESENTE QUELLO CLICLATO
                            if (this.myArchetypeArray.includes(elem.archetype_name)) {
                                continue
                            }
                            // SE NON è PRESENTE, LO PUSHO
                            else {
                                this.myArchetypeArray.push(elem.archetype_name)
                            }
                        }
                    }
                });

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
                <select id="filter" v-model="store.archetype" class="form-select my-3">
                    <option value="" selected>Select archetype</option>
                    <option v-for="archetype, index in myArchetypeArray" :key="index" :value="archetype">
                        {{archetype}}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>