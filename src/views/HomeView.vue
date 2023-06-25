<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import HeroComponent from '@/components/HeroComponent.vue';
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
    axios.get('http://localhost:3000/best-products')
      .then((response) => {
        this.setProducts(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
</script>

<template>
  <div>
    <NavbarComponent />
    <div class="container">
      <HeroComponent />

      <div class="row mt-5 pt-5">
        <div class="col">
          <h3>Best <strong>Foods</strong></h3>
        </div>
        <div class="col d-flex">
          <router-link class="ms-auto btn btn-light shadow-sm rounded-pill px-3 lh-0" to='/foods'>
            See More
            <i class="m-0 bi bi-arrow-right-short"></i>
          </router-link>
        </div>
      </div>

      <div class="row mt-5 mb-5">
        <div class="col-4" v-for="product in products" :key="product.id">
          <CardProductComponent :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
