<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import CardProductComponent from '@/components/CardProductComponent.vue';
import axios from 'axios';
</script>

<script>
export default {
    data() {
        return {
            products: []
        }
    },
    methods: {
        setProducts(data) {
            this.products = data
        }
    },
    mounted() {
        axios.get('http://localhost:3000/products')
            .then((response) => {
                this.setProducts(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
</script>

<template lang="">
    <div>
        <NavbarComponent />
        <div class="container">
            <h2 class="mt-5"><strong>Foods</strong> List</h2>

            <div class="row mt-4">
                <div class="col-3 mb-3" v-for="product in products" :key="product.id">
                    <CardProductComponent :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>