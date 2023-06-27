<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import axios from 'axios';
</script>

<script>
export default {
    data() {
        return {
            carts: [],
            cart: 0
        }
    },
    methods: {
        setCart(data) {
            this.carts = data
        },
        deleteCart(id) {
            axios
                .delete(`http://localhost:3000/keranjangs/${id}`)
                .then(() => {
                    this.cart-- // mengurangi jumlah keranjang yang ada di navbar
                    this.$toast.success('Delete Success', {
                        duration: 3000,
                        position: 'top-right'
                    })
                    axios // update data keranjang
                        .get(`http://localhost:3000/keranjangs`)
                        .then((response) => {
                            this.setCart(response.data);
                        })
                })
                .catch((err) => {
                    this.$toast.error(err.message, {
                        duration: 3000,
                        position: 'top-right'
                    })
                });
        }
    },
    mounted() {
        axios
            .get(`http://localhost:3000/keranjangs`)
            .then((response) => {
                this.setCart(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    computed: {
        priceTotal() { // menjumlahkan total harga
            return this.carts.reduce((items, data) => {
                return items+(data.product.harga*data.qty)
            }, 0)
        }
    }
}
</script>

<template>
    <div>
        <NavbarComponent :key="cart" />
        <div class="container mt-5">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link class="text-success" to="/">Home</router-link></li>
                    <li class="breadcrumb-item"><router-link class="text-success" to="/foods">Foods</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Cart</li>
                </ol>
            </nav>

            <h2 class="mt-4">My <strong>Cart</strong></h2>

            <div class="table-responsive">
                <table class="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price Subtotal</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(cart, index) in carts" :key="cart.id">
                            <th>{{ index + 1 }}</th>
                            <td>
                                <img :src="`/images/` + cart.product.gambar" class="img-fluid shadow rounded-3" alt=""
                                    width="250">
                            </td>
                            <td class="fw-bold fs-4">
                                {{ cart.product.nama }}
                            </td>
                            <td class="text-secondary">
                                Rp. {{ cart.product.harga }}
                            </td>
                            <td>
                                {{ cart.qty }}
                            </td>
                            <td class="text-success fw-bold">
                                Rp. {{ cart.product.harga * cart.qty }}
                            </td>
                            <td>
                                <button class="btn btn-danger" @click="deleteCart(cart.id)"><i
                                        class="bi bi-trash"></i></button>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="5" align="right" class="fw-bold fs-4">Price Total:</td>
                            <td class="fw-bold text-success fs-4">Rp. {{ priceTotal }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>