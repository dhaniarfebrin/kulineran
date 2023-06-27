<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import axios from 'axios';
</script>

<script>
export default {
    data() {
        return {
            product: {},
            param: '',
            cartOrder: {}
        }
    },
    methods: {
        setProducts(data) {
            this.product = data
        },
        addToCart() {
            if (this.cartOrder.qty) {
                this.cartOrder.product = this.product
                axios
                    .post('http://localhost:3000/keranjangs', this.cartOrder)
                    .then(() => {
                        this.$router.push({ path: '/cart' })
                        this.$toast.success('Added to Cart', {
                            duration: 3000,
                            position: 'top-right'
                        })
                    })
                    .catch((err) => {
                        this.$toast.error(err.message, {
                            duration: 3000,
                            position: 'top-right'
                        })
                    })
            } else {
                this.$toast.error('at least 1 Quantity', {
                    duration: 3000,
                    position: 'top-right'
                })
            }
        }
    },
    mounted() {
        this.param = this.$route.params.id
        axios
            .get(`http://localhost:3000/products/${this.param}`)
            .then((response) => {
                this.setProducts(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
</script>

<template>
    <div>
        <NavbarComponent />
        <div class="container mt-5">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link class="text-success" to="/">Home</router-link></li>
                    <li class="breadcrumb-item"><router-link class="text-success" to="/foods">Foods</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Detail</li>
                </ol>
            </nav>

            <div class="row mt-5">
                <div class="col-md-6">
                    <img :src="`/images/` + product.gambar" class="img-fluid shadow rounded-3" alt="">
                </div>
                <div class="col-md-6 d-flex flex-column justify-content-center">
                    <h2 class="fw-bold">{{ product.nama }}</h2>
                    <h3 class="text-success fw-bold">Rp. {{ product.harga }}</h3>

                    <form action="#" class="mt-4" v-on:submit.prevent>
                        <div class="form-group row">
                            <div class="col-md-2">
                                <label for="" class="form-label m-0 lh-1 d-flex align-items-center h-100">Quantity</label>
                            </div>
                            <div class="col-md-2">
                                <input type="number" v-model="cartOrder.qty" name="qty" min="1" max="5"
                                    class="form-control shadow-sm">
                            </div>
                        </div>
                        <button @click="addToCart" type="submit" class="mt-5 px-4 btn btn-success rounded-pill btn-lg"><i
                                class="bi bi-cart me-2"></i> Order</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>