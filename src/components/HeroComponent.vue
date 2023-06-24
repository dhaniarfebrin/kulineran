<script>
export default {
    name: 'HeroComponent'
}
</script>

<template>
    <div class="row hero mt-5">
        <div class="col">
            <div class="d-flex h-100">
                <div class="justify-content-center align-self-center">
                    <h2><strong>Delicious Food Menu,</strong><br> In Your Gadget</h2>
                    <p class="text-secondary fs-6">Ayo segera pilih dan pesan makanan favorit anda.</p>
                    <router-link class="btn btn-lg btn-success rounded-pill mt-4 px-4" to="/foods"><i class="bi-arrow-right"></i> Pesan</router-link>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-center">
                <img src="@/assets/img/hero.svg" alt="">
            </div>
        </div>
    </div>
</template>