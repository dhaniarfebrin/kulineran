<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import axios from 'axios';
</script>

<script>
export default {
    data() {
        return {
            carts: [],
            cart: 0,
            orders: {}
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
        },
        addOrder() {
            if (!this.carts[0]) {
                this.$toast.error('Cart is empty', {
                    duration: 3000,
                    position: 'top-right'
                })
            }
            else if (this.orders.nama && this.orders.meja) {
                this.orders.carts = this.carts
                axios
                    .post(`http://localhost:3000/pesanans`, this.orders)
                    .then(() => {
                        this.cart--
                        this.carts.map(item => {
                            axios // delete data keranjang
                                .delete(`http://localhost:3000/keranjangs/${item.id}`)
                                .catch((err) => {
                                    this.$toast.error(err.message, {
                                        duration: 3000,
                                        position: 'top-right'
                                    })
                                });
                        })
                        this.$router.push({ path: '/success-order' })
                    })
                    .catch((err) => {
                        this.$toast.error(err.message, {
                            duration: 3000,
                            position: 'top-right'
                        })
                    });
            } else {
                this.$toast.error('Pleas fill the form correctly', {
                    duration: 3000,
                    position: 'top-right'
                })
            }
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
                return items + (data.product.harga * data.qty)
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

            <div class="d-flex justify-content-end">
                <form action="#" class="mt-4" v-on:submit.prevent>
                    <div class="form-group row mb-2">
                        <div class="col-md-5">
                            <label for="" class="form-label m-0 lh-1 d-flex align-items-center h-100">Customer Name</label>
                        </div>
                        <div class="col-md">
                            <input type="text" v-model="orders.nama" name="nama" class="form-control shadow-sm">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-5">
                            <label for="" class="form-label m-0 lh-1 d-flex align-items-center h-100">Table Number</label>
                        </div>
                        <div class="col-md">
                            <input type="number" v-model="orders.meja" name="meja" class="form-control shadow-sm">
                        </div>
                    </div>
                    <button @click="addOrder" type="submit" class="mt-3 px-4 btn btn-success rounded-pill btn-lg"><i
                            class="bi bi-check me-2"></i> Order</button>
                </form>
            </div>
        </div>
    </div>
</template>