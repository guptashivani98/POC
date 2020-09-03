<template>
    <div class="container">
        <b-button block variant="primary" @click="loadServices">Request Data Button</b-button>
        <hr>
        <b-table v-if="services.length" hover :items="services" :fields="fields" head-variant="dark" table-variant="warning"></b-table>
    </div>
</template>

<script>
import RequestData from '../dataService/POCservice.js'

export default {
    data(){
        return{
            services: [],
            fields:['service', 'price']
        }
    },
    methods:{
        async loadServices(){
          this.services =  await RequestData();
        }
    }
}
</script>
