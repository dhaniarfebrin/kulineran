<script>
import axios from 'axios';

export default {
    name: "NavbarComponent",
    data() {
        return {
            cart: 0
        }
    },
    methods: {
        setCart(data) {
            this.cart = data.length;
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
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container">
            <a class="navbar-brand" href="#">Kulineran</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/foods">Foods</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/cart">
                            Cart
                            <i class="bi-cart-fill"></i>
                            <span class="badge bg-success ms-1 fw-normal">{{ cart }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>