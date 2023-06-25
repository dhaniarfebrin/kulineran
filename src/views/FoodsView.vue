<script setup>
import NavbarComponent from "@/components/NavbarComponent.vue";
import CardProductComponent from "@/components/CardProductComponent.vue";
import axios from "axios";
</script>

<script>
export default {
    data() {
        return {
            products: [],
            search: ''
        };
    },
    methods: {
        setProducts(data) {
            this.products = data;
        },
        searchFood() {
            axios
            .get("http://localhost:3000/products?q="+this.search)
            .then((response) => {
                this.setProducts(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    },
    mounted() {
        axios
            .get("http://localhost:3000/products")
            .then((response) => {
                this.setProducts(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>

<template lang="">
    <div>
        <NavbarComponent />
        <div class="container">
            <div class="row mt-5">
                <div class="col">
                    <h2 class="m-0"><strong>Food</strong> Lists</h2>
                </div>
                <div class="col">
                    <div class="input-group flex-nowrap">
                        <input
                        v-model="search"
                        type="text"
                        class="form-control"
                        placeholder="Search food here..."
                        aria-label="Foods"
                        aria-describedby="addon-wrapping"
                        @keyup="searchFood"
                        />
                        <span class="input-group-text" id="addon-wrapping"
                            ><i class="bi bi-search"></i></span
                        >
                    </div>
                </div>
            </div>

            <div class="row mt-5">
                <div
                    class="col-3 mb-4"
                    v-for="product in products"
                    :key="product.id"
                >
                    <CardProductComponent :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>
