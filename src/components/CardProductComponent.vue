<script>
export default {
    name: 'CardProductComponent',
    props: ['product']
}
</script>

<template>
    <div class="card shadow rounded-4 border-0">
        <img :src="`/images/${product.gambar}`" class="card-img-top" :alt="`${product.nama}`">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title fw-bold">{{ product.nama }}</h5>
            <p class="card-text">Rp. {{ product.harga }}</p>
            <router-link :to="`foods/${product.id}`" v-if="product.is_ready" class="btn btn-success ms-auto"><i class="bi bi-cart"></i> Order</router-link>
            <button v-else class="btn btn-secondary ms-auto" type="button" disabled>Sold Out</button>
        </div>
    </div>
</template>

<style>
.card {
    overflow: hidden;
}

.card>img {
    max-height: 204px;
    min-height: 204px;
    overflow: hidden;
}
</style>