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
            <a href="#" class="btn btn-success ms-auto"><i class="bi bi-cart"></i> Order</a>
        </div>
    </div>
</template>

<style>
    .card {
        overflow: hidden;
    }
</style>