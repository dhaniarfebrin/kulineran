<script setup>
    import NavbarComponent from '@/components/NavbarComponent.vue';
</script>
<template>
    <div class="d-flex flex-column" style="height: 80vh;">
        <NavbarComponent :key="cart" />
        <div class="container d-flex justify-content-center align-items-center flex-column h-100">
            <img src="../assets//img/success-order.svg" alt="" class="w-25">
            <h1 class="fw-bold">Success!</h1>
            <p>Thank You for Ordering</p>
        </div>
    </div>
</template>